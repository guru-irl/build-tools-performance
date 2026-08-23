import React from 'react';
const LABEL_20135 = 'component_20135';
export function Component20135({ value = 20135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20135, 'data-value': derived.doubled }, children);
}
export default Component20135;
