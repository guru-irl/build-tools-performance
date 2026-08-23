import React from 'react';
const LABEL_43472 = 'component_43472';
export function Component43472({ value = 43472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43472, 'data-value': derived.doubled }, children);
}
export default Component43472;
