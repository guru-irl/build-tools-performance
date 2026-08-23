import React from 'react';
const LABEL_6927 = 'component_6927';
export function Component6927({ value = 6927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6927, 'data-value': derived.doubled }, children);
}
export default Component6927;
