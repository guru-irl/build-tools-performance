import React from 'react';
const LABEL_4262 = 'component_4262';
export function Component4262({ value = 4262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4262, 'data-value': derived.doubled }, children);
}
export default Component4262;
