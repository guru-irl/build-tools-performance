import React from 'react';
const LABEL_40181 = 'component_40181';
export function Component40181({ value = 40181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40181, 'data-value': derived.doubled }, children);
}
export default Component40181;
