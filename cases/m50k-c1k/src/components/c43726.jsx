import React from 'react';
const LABEL_43726 = 'component_43726';
export function Component43726({ value = 43726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43726, 'data-value': derived.doubled }, children);
}
export default Component43726;
