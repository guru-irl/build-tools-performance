import React from 'react';
const LABEL_14840 = 'component_14840';
export function Component14840({ value = 14840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14840, 'data-value': derived.doubled }, children);
}
export default Component14840;
