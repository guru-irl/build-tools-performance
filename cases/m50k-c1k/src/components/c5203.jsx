import React from 'react';
const LABEL_5203 = 'component_5203';
export function Component5203({ value = 5203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5203, 'data-value': derived.doubled }, children);
}
export default Component5203;
