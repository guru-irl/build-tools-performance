import React from 'react';
const LABEL_29409 = 'component_29409';
export function Component29409({ value = 29409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29409, 'data-value': derived.doubled }, children);
}
export default Component29409;
