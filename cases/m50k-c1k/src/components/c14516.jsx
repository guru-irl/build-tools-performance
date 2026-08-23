import React from 'react';
const LABEL_14516 = 'component_14516';
export function Component14516({ value = 14516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14516, 'data-value': derived.doubled }, children);
}
export default Component14516;
