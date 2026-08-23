import React from 'react';
const LABEL_46867 = 'component_46867';
export function Component46867({ value = 46867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46867, 'data-value': derived.doubled }, children);
}
export default Component46867;
