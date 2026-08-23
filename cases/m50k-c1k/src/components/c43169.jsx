import React from 'react';
const LABEL_43169 = 'component_43169';
export function Component43169({ value = 43169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43169, 'data-value': derived.doubled }, children);
}
export default Component43169;
