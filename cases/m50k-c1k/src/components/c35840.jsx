import React from 'react';
const LABEL_35840 = 'component_35840';
export function Component35840({ value = 35840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35840, 'data-value': derived.doubled }, children);
}
export default Component35840;
