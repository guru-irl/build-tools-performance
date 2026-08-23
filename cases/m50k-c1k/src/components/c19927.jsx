import React from 'react';
const LABEL_19927 = 'component_19927';
export function Component19927({ value = 19927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19927, 'data-value': derived.doubled }, children);
}
export default Component19927;
