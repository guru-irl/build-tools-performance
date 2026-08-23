import React from 'react';
const LABEL_7892 = 'component_7892';
export function Component7892({ value = 7892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7892, 'data-value': derived.doubled }, children);
}
export default Component7892;
