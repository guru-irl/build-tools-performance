import React from 'react';
const LABEL_30432 = 'component_30432';
export function Component30432({ value = 30432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30432, 'data-value': derived.doubled }, children);
}
export default Component30432;
