import React from 'react';
const LABEL_43696 = 'component_43696';
export function Component43696({ value = 43696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43696, 'data-value': derived.doubled }, children);
}
export default Component43696;
