import React from 'react';
const LABEL_6225 = 'component_6225';
export function Component6225({ value = 6225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6225, 'data-value': derived.doubled }, children);
}
export default Component6225;
