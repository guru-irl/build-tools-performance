import React from 'react';
const LABEL_13892 = 'component_13892';
export function Component13892({ value = 13892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13892, 'data-value': derived.doubled }, children);
}
export default Component13892;
