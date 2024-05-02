#!/usr/bin/env python

from sentence_transformers import SentenceTransformer, util


model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

my_sentence = "I'm ecstatic"

sentences = ["I'm happy", "I'm full of happiness", "I'm elated",
             "I'm sad", "I'm poor", "The quick brown fox"]

print("my_sentence:", my_sentence)

my_sentence_encoded = model.encode(my_sentence, convert_to_tensor=True)

for sentence in sentences:
    sentence_encoded = model.encode(sentence, convert_to_tensor=True)
    result = util.pytorch_cos_sim(sentence_encoded, my_sentence_encoded)
    value = result.item()
    print(sentence, value)


