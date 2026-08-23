import React from 'react';
const LABEL_30022 = 'component_30022';
export function Component30022({ value = 30022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30022, 'data-value': derived.doubled }, children);
}
export default Component30022;
