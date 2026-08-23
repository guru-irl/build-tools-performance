import React from 'react';
const LABEL_22892 = 'component_22892';
export function Component22892({ value = 22892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22892, 'data-value': derived.doubled }, children);
}
export default Component22892;
