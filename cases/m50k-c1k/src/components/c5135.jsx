import React from 'react';
const LABEL_5135 = 'component_5135';
export function Component5135({ value = 5135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5135, 'data-value': derived.doubled }, children);
}
export default Component5135;
