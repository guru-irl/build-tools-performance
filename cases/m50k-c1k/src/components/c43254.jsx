import React from 'react';
const LABEL_43254 = 'component_43254';
export function Component43254({ value = 43254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43254, 'data-value': derived.doubled }, children);
}
export default Component43254;
