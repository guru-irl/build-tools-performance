import React from 'react';
const LABEL_10226 = 'component_10226';
export function Component10226({ value = 10226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10226, 'data-value': derived.doubled }, children);
}
export default Component10226;
