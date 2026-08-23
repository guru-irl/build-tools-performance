import React from 'react';
const LABEL_39927 = 'component_39927';
export function Component39927({ value = 39927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39927, 'data-value': derived.doubled }, children);
}
export default Component39927;
