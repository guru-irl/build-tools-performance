import React from 'react';
const LABEL_19779 = 'component_19779';
export function Component19779({ value = 19779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19779, 'data-value': derived.doubled }, children);
}
export default Component19779;
