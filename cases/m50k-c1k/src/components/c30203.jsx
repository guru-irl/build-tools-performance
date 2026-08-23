import React from 'react';
const LABEL_30203 = 'component_30203';
export function Component30203({ value = 30203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30203, 'data-value': derived.doubled }, children);
}
export default Component30203;
