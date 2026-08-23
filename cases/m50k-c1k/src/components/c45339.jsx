import React from 'react';
const LABEL_45339 = 'component_45339';
export function Component45339({ value = 45339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45339, 'data-value': derived.doubled }, children);
}
export default Component45339;
