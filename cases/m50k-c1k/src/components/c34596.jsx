import React from 'react';
const LABEL_34596 = 'component_34596';
export function Component34596({ value = 34596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34596, 'data-value': derived.doubled }, children);
}
export default Component34596;
