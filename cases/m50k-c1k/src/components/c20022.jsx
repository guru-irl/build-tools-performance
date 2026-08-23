import React from 'react';
const LABEL_20022 = 'component_20022';
export function Component20022({ value = 20022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20022, 'data-value': derived.doubled }, children);
}
export default Component20022;
