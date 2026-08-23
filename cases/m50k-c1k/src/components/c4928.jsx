import React from 'react';
const LABEL_4928 = 'component_4928';
export function Component4928({ value = 4928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4928, 'data-value': derived.doubled }, children);
}
export default Component4928;
