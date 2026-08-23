import React from 'react';
const LABEL_5198 = 'component_5198';
export function Component5198({ value = 5198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5198, 'data-value': derived.doubled }, children);
}
export default Component5198;
