import React from 'react';
const LABEL_11838 = 'component_11838';
export function Component11838({ value = 11838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11838, 'data-value': derived.doubled }, children);
}
export default Component11838;
