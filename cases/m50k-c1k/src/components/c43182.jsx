import React from 'react';
const LABEL_43182 = 'component_43182';
export function Component43182({ value = 43182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43182, 'data-value': derived.doubled }, children);
}
export default Component43182;
