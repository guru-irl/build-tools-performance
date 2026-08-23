import React from 'react';
const LABEL_30954 = 'component_30954';
export function Component30954({ value = 30954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30954, 'data-value': derived.doubled }, children);
}
export default Component30954;
