import React from 'react';
const LABEL_5676 = 'component_5676';
export function Component5676({ value = 5676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5676, 'data-value': derived.doubled }, children);
}
export default Component5676;
