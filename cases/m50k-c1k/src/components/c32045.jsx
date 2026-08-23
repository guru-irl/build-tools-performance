import React from 'react';
const LABEL_32045 = 'component_32045';
export function Component32045({ value = 32045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32045, 'data-value': derived.doubled }, children);
}
export default Component32045;
