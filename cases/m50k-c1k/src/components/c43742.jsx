import React from 'react';
const LABEL_43742 = 'component_43742';
export function Component43742({ value = 43742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43742, 'data-value': derived.doubled }, children);
}
export default Component43742;
