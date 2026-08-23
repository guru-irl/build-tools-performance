import React from 'react';
const LABEL_23225 = 'component_23225';
export function Component23225({ value = 23225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23225, 'data-value': derived.doubled }, children);
}
export default Component23225;
