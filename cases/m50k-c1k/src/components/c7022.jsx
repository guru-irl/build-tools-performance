import React from 'react';
const LABEL_7022 = 'component_7022';
export function Component7022({ value = 7022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7022, 'data-value': derived.doubled }, children);
}
export default Component7022;
