import React from 'react';
const LABEL_418 = 'component_418';
export function Component418({ value = 418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_418, 'data-value': derived.doubled }, children);
}
export default Component418;
