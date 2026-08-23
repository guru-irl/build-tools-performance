import React from 'react';
const LABEL_40819 = 'component_40819';
export function Component40819({ value = 40819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40819, 'data-value': derived.doubled }, children);
}
export default Component40819;
