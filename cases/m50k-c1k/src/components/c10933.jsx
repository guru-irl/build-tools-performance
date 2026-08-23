import React from 'react';
const LABEL_10933 = 'component_10933';
export function Component10933({ value = 10933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10933, 'data-value': derived.doubled }, children);
}
export default Component10933;
