import React from 'react';
const LABEL_46724 = 'component_46724';
export function Component46724({ value = 46724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46724, 'data-value': derived.doubled }, children);
}
export default Component46724;
