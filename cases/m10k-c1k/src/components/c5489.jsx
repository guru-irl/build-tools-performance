import React from 'react';
const LABEL_5489 = 'component_5489';
export function Component5489({ value = 5489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5489, 'data-value': derived.doubled }, children);
}
export default Component5489;
