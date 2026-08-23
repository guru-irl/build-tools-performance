import React from 'react';
const LABEL_20226 = 'component_20226';
export function Component20226({ value = 20226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20226, 'data-value': derived.doubled }, children);
}
export default Component20226;
