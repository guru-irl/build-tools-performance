import React from 'react';
const LABEL_32230 = 'component_32230';
export function Component32230({ value = 32230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32230, 'data-value': derived.doubled }, children);
}
export default Component32230;
