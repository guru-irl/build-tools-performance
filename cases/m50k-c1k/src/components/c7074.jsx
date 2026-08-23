import React from 'react';
const LABEL_7074 = 'component_7074';
export function Component7074({ value = 7074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7074, 'data-value': derived.doubled }, children);
}
export default Component7074;
