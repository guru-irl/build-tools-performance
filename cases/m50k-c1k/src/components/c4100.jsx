import React from 'react';
const LABEL_4100 = 'component_4100';
export function Component4100({ value = 4100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4100, 'data-value': derived.doubled }, children);
}
export default Component4100;
