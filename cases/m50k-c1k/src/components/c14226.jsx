import React from 'react';
const LABEL_14226 = 'component_14226';
export function Component14226({ value = 14226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14226, 'data-value': derived.doubled }, children);
}
export default Component14226;
