import React from 'react';
const LABEL_43464 = 'component_43464';
export function Component43464({ value = 43464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43464, 'data-value': derived.doubled }, children);
}
export default Component43464;
