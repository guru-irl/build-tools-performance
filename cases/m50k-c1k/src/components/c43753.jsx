import React from 'react';
const LABEL_43753 = 'component_43753';
export function Component43753({ value = 43753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43753, 'data-value': derived.doubled }, children);
}
export default Component43753;
