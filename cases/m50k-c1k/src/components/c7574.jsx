import React from 'react';
const LABEL_7574 = 'component_7574';
export function Component7574({ value = 7574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7574, 'data-value': derived.doubled }, children);
}
export default Component7574;
