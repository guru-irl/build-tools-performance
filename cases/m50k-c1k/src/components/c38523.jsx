import React from 'react';
const LABEL_38523 = 'component_38523';
export function Component38523({ value = 38523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38523, 'data-value': derived.doubled }, children);
}
export default Component38523;
