import React from 'react';
const LABEL_11781 = 'component_11781';
export function Component11781({ value = 11781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11781, 'data-value': derived.doubled }, children);
}
export default Component11781;
