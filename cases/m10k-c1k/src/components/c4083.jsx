import React from 'react';
const LABEL_4083 = 'component_4083';
export function Component4083({ value = 4083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4083, 'data-value': derived.doubled }, children);
}
export default Component4083;
