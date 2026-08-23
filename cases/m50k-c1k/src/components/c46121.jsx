import React from 'react';
const LABEL_46121 = 'component_46121';
export function Component46121({ value = 46121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46121, 'data-value': derived.doubled }, children);
}
export default Component46121;
