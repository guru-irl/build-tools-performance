import React from 'react';
const LABEL_36892 = 'component_36892';
export function Component36892({ value = 36892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36892, 'data-value': derived.doubled }, children);
}
export default Component36892;
