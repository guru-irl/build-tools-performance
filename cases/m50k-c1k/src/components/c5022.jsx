import React from 'react';
const LABEL_5022 = 'component_5022';
export function Component5022({ value = 5022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5022, 'data-value': derived.doubled }, children);
}
export default Component5022;
