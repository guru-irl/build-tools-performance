import React from 'react';
const LABEL_23226 = 'component_23226';
export function Component23226({ value = 23226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23226, 'data-value': derived.doubled }, children);
}
export default Component23226;
