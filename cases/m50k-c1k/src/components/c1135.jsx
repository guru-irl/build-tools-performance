import React from 'react';
const LABEL_1135 = 'component_1135';
export function Component1135({ value = 1135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1135, 'data-value': derived.doubled }, children);
}
export default Component1135;
