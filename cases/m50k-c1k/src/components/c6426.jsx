import React from 'react';
const LABEL_6426 = 'component_6426';
export function Component6426({ value = 6426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6426, 'data-value': derived.doubled }, children);
}
export default Component6426;
