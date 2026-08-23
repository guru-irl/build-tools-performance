import React from 'react';
const LABEL_38927 = 'component_38927';
export function Component38927({ value = 38927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38927, 'data-value': derived.doubled }, children);
}
export default Component38927;
