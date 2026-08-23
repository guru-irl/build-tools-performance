import React from 'react';
const LABEL_7927 = 'component_7927';
export function Component7927({ value = 7927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7927, 'data-value': derived.doubled }, children);
}
export default Component7927;
