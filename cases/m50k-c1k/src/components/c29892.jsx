import React from 'react';
const LABEL_29892 = 'component_29892';
export function Component29892({ value = 29892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29892, 'data-value': derived.doubled }, children);
}
export default Component29892;
