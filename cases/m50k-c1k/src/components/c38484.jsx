import React from 'react';
const LABEL_38484 = 'component_38484';
export function Component38484({ value = 38484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38484, 'data-value': derived.doubled }, children);
}
export default Component38484;
