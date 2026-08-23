import React from 'react';
const LABEL_36914 = 'component_36914';
export function Component36914({ value = 36914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36914, 'data-value': derived.doubled }, children);
}
export default Component36914;
