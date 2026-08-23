import React from 'react';
const LABEL_46201 = 'component_46201';
export function Component46201({ value = 46201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46201, 'data-value': derived.doubled }, children);
}
export default Component46201;
