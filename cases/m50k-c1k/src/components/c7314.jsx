import React from 'react';
const LABEL_7314 = 'component_7314';
export function Component7314({ value = 7314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7314, 'data-value': derived.doubled }, children);
}
export default Component7314;
