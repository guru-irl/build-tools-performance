import React from 'react';
const LABEL_35402 = 'component_35402';
export function Component35402({ value = 35402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35402, 'data-value': derived.doubled }, children);
}
export default Component35402;
