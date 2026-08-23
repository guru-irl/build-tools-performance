import React from 'react';
const LABEL_4562 = 'component_4562';
export function Component4562({ value = 4562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4562, 'data-value': derived.doubled }, children);
}
export default Component4562;
