import React from 'react';
const LABEL_46819 = 'component_46819';
export function Component46819({ value = 46819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46819, 'data-value': derived.doubled }, children);
}
export default Component46819;
