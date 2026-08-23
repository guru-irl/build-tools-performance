import React from 'react';
const LABEL_16045 = 'component_16045';
export function Component16045({ value = 16045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16045, 'data-value': derived.doubled }, children);
}
export default Component16045;
