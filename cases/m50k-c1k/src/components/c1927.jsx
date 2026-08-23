import React from 'react';
const LABEL_1927 = 'component_1927';
export function Component1927({ value = 1927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1927, 'data-value': derived.doubled }, children);
}
export default Component1927;
