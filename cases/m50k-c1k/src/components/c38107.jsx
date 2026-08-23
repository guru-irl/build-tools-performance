import React from 'react';
const LABEL_38107 = 'component_38107';
export function Component38107({ value = 38107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38107, 'data-value': derived.doubled }, children);
}
export default Component38107;
