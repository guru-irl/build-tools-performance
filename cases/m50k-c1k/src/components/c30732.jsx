import React from 'react';
const LABEL_30732 = 'component_30732';
export function Component30732({ value = 30732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30732, 'data-value': derived.doubled }, children);
}
export default Component30732;
