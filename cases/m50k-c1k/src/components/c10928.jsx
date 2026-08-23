import React from 'react';
const LABEL_10928 = 'component_10928';
export function Component10928({ value = 10928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10928, 'data-value': derived.doubled }, children);
}
export default Component10928;
