import React from 'react';
const LABEL_18310 = 'component_18310';
export function Component18310({ value = 18310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18310, 'data-value': derived.doubled }, children);
}
export default Component18310;
