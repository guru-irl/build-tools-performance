import React from 'react';
const LABEL_6914 = 'component_6914';
export function Component6914({ value = 6914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6914, 'data-value': derived.doubled }, children);
}
export default Component6914;
