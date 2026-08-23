import React from 'react';
const LABEL_26093 = 'component_26093';
export function Component26093({ value = 26093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26093, 'data-value': derived.doubled }, children);
}
export default Component26093;
