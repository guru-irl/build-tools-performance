import React from 'react';
const LABEL_46171 = 'component_46171';
export function Component46171({ value = 46171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46171, 'data-value': derived.doubled }, children);
}
export default Component46171;
