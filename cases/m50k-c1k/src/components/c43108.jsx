import React from 'react';
const LABEL_43108 = 'component_43108';
export function Component43108({ value = 43108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43108, 'data-value': derived.doubled }, children);
}
export default Component43108;
