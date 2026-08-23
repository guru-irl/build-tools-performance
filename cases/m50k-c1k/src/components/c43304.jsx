import React from 'react';
const LABEL_43304 = 'component_43304';
export function Component43304({ value = 43304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43304, 'data-value': derived.doubled }, children);
}
export default Component43304;
