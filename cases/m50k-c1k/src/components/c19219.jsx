import React from 'react';
const LABEL_19219 = 'component_19219';
export function Component19219({ value = 19219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19219, 'data-value': derived.doubled }, children);
}
export default Component19219;
