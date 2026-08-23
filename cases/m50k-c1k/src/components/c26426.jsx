import React from 'react';
const LABEL_26426 = 'component_26426';
export function Component26426({ value = 26426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26426, 'data-value': derived.doubled }, children);
}
export default Component26426;
