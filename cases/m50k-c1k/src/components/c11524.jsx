import React from 'react';
const LABEL_11524 = 'component_11524';
export function Component11524({ value = 11524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11524, 'data-value': derived.doubled }, children);
}
export default Component11524;
