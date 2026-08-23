import React from 'react';
const LABEL_30486 = 'component_30486';
export function Component30486({ value = 30486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30486, 'data-value': derived.doubled }, children);
}
export default Component30486;
