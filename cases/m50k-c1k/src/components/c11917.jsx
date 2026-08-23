import React from 'react';
const LABEL_11917 = 'component_11917';
export function Component11917({ value = 11917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11917, 'data-value': derived.doubled }, children);
}
export default Component11917;
