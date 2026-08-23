import React from 'react';
const LABEL_32429 = 'component_32429';
export function Component32429({ value = 32429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32429, 'data-value': derived.doubled }, children);
}
export default Component32429;
