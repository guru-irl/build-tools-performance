import React from 'react';
const LABEL_7135 = 'component_7135';
export function Component7135({ value = 7135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7135, 'data-value': derived.doubled }, children);
}
export default Component7135;
