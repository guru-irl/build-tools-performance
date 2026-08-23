import React from 'react';
const LABEL_16262 = 'component_16262';
export function Component16262({ value = 16262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16262, 'data-value': derived.doubled }, children);
}
export default Component16262;
