import React from 'react';
const LABEL_36781 = 'component_36781';
export function Component36781({ value = 36781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36781, 'data-value': derived.doubled }, children);
}
export default Component36781;
