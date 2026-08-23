import React from 'react';
const LABEL_34678 = 'component_34678';
export function Component34678({ value = 34678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34678, 'data-value': derived.doubled }, children);
}
export default Component34678;
