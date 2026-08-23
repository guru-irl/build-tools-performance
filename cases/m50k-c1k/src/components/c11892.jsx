import React from 'react';
const LABEL_11892 = 'component_11892';
export function Component11892({ value = 11892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11892, 'data-value': derived.doubled }, children);
}
export default Component11892;
