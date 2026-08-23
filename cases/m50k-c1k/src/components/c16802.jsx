import React from 'react';
const LABEL_16802 = 'component_16802';
export function Component16802({ value = 16802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16802, 'data-value': derived.doubled }, children);
}
export default Component16802;
