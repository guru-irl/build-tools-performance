import React from 'react';
const LABEL_43358 = 'component_43358';
export function Component43358({ value = 43358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43358, 'data-value': derived.doubled }, children);
}
export default Component43358;
