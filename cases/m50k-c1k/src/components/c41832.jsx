import React from 'react';
const LABEL_41832 = 'component_41832';
export function Component41832({ value = 41832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41832, 'data-value': derived.doubled }, children);
}
export default Component41832;
