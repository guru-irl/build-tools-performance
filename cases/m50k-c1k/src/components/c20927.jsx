import React from 'react';
const LABEL_20927 = 'component_20927';
export function Component20927({ value = 20927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20927, 'data-value': derived.doubled }, children);
}
export default Component20927;
