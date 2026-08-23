import React from 'react';
const LABEL_3892 = 'component_3892';
export function Component3892({ value = 3892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3892, 'data-value': derived.doubled }, children);
}
export default Component3892;
