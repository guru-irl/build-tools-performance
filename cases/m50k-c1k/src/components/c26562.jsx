import React from 'react';
const LABEL_26562 = 'component_26562';
export function Component26562({ value = 26562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26562, 'data-value': derived.doubled }, children);
}
export default Component26562;
