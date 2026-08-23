import React from 'react';
const LABEL_38678 = 'component_38678';
export function Component38678({ value = 38678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38678, 'data-value': derived.doubled }, children);
}
export default Component38678;
