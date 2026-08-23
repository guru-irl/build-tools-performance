import React from 'react';
const LABEL_40636 = 'component_40636';
export function Component40636({ value = 40636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40636, 'data-value': derived.doubled }, children);
}
export default Component40636;
