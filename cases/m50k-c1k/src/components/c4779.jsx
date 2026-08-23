import React from 'react';
const LABEL_4779 = 'component_4779';
export function Component4779({ value = 4779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4779, 'data-value': derived.doubled }, children);
}
export default Component4779;
