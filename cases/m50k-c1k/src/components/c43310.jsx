import React from 'react';
const LABEL_43310 = 'component_43310';
export function Component43310({ value = 43310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43310, 'data-value': derived.doubled }, children);
}
export default Component43310;
