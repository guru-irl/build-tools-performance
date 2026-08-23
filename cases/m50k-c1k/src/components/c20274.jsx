import React from 'react';
const LABEL_20274 = 'component_20274';
export function Component20274({ value = 20274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20274, 'data-value': derived.doubled }, children);
}
export default Component20274;
