import React from 'react';
const LABEL_8005 = 'component_8005';
export function Component8005({ value = 8005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8005, 'data-value': derived.doubled }, children);
}
export default Component8005;
