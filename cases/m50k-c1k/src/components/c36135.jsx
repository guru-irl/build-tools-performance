import React from 'react';
const LABEL_36135 = 'component_36135';
export function Component36135({ value = 36135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36135, 'data-value': derived.doubled }, children);
}
export default Component36135;
