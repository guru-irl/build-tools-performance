import React from 'react';
const LABEL_43245 = 'component_43245';
export function Component43245({ value = 43245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43245, 'data-value': derived.doubled }, children);
}
export default Component43245;
