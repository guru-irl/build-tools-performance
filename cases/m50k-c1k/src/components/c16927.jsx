import React from 'react';
const LABEL_16927 = 'component_16927';
export function Component16927({ value = 16927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16927, 'data-value': derived.doubled }, children);
}
export default Component16927;
