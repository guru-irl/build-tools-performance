import React from 'react';
const LABEL_16751 = 'component_16751';
export function Component16751({ value = 16751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16751, 'data-value': derived.doubled }, children);
}
export default Component16751;
