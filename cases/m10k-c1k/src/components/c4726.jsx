import React from 'react';
const LABEL_4726 = 'component_4726';
export function Component4726({ value = 4726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4726, 'data-value': derived.doubled }, children);
}
export default Component4726;
