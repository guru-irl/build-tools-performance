import React from 'react';
const LABEL_20146 = 'component_20146';
export function Component20146({ value = 20146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20146, 'data-value': derived.doubled }, children);
}
export default Component20146;
