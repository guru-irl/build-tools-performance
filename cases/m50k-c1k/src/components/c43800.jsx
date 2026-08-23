import React from 'react';
const LABEL_43800 = 'component_43800';
export function Component43800({ value = 43800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43800, 'data-value': derived.doubled }, children);
}
export default Component43800;
