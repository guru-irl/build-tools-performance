import React from 'react';
const LABEL_10429 = 'component_10429';
export function Component10429({ value = 10429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10429, 'data-value': derived.doubled }, children);
}
export default Component10429;
