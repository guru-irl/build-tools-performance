import React from 'react';
const LABEL_46234 = 'component_46234';
export function Component46234({ value = 46234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46234, 'data-value': derived.doubled }, children);
}
export default Component46234;
