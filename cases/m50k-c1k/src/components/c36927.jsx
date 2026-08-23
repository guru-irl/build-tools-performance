import React from 'react';
const LABEL_36927 = 'component_36927';
export function Component36927({ value = 36927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36927, 'data-value': derived.doubled }, children);
}
export default Component36927;
