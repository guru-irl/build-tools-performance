import React from 'react';
const LABEL_13806 = 'component_13806';
export function Component13806({ value = 13806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13806, 'data-value': derived.doubled }, children);
}
export default Component13806;
