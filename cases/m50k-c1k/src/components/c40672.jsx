import React from 'react';
const LABEL_40672 = 'component_40672';
export function Component40672({ value = 40672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40672, 'data-value': derived.doubled }, children);
}
export default Component40672;
