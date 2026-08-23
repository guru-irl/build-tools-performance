import React from 'react';
const LABEL_5330 = 'component_5330';
export function Component5330({ value = 5330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5330, 'data-value': derived.doubled }, children);
}
export default Component5330;
