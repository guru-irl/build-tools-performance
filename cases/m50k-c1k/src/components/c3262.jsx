import React from 'react';
const LABEL_3262 = 'component_3262';
export function Component3262({ value = 3262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3262, 'data-value': derived.doubled }, children);
}
export default Component3262;
