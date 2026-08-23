import React from 'react';
const LABEL_9022 = 'component_9022';
export function Component9022({ value = 9022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9022, 'data-value': derived.doubled }, children);
}
export default Component9022;
