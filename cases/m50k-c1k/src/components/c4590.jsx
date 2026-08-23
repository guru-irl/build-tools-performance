import React from 'react';
const LABEL_4590 = 'component_4590';
export function Component4590({ value = 4590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4590, 'data-value': derived.doubled }, children);
}
export default Component4590;
