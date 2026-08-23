import React from 'react';
const LABEL_10927 = 'component_10927';
export function Component10927({ value = 10927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10927, 'data-value': derived.doubled }, children);
}
export default Component10927;
