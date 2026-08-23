import React from 'react';
const LABEL_28927 = 'component_28927';
export function Component28927({ value = 28927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28927, 'data-value': derived.doubled }, children);
}
export default Component28927;
