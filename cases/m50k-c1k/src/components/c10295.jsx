import React from 'react';
const LABEL_10295 = 'component_10295';
export function Component10295({ value = 10295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10295, 'data-value': derived.doubled }, children);
}
export default Component10295;
