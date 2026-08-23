import React from 'react';
const LABEL_34310 = 'component_34310';
export function Component34310({ value = 34310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34310, 'data-value': derived.doubled }, children);
}
export default Component34310;
