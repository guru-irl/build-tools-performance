import React from 'react';
const LABEL_43901 = 'component_43901';
export function Component43901({ value = 43901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43901, 'data-value': derived.doubled }, children);
}
export default Component43901;
