import React from 'react';
const LABEL_46838 = 'component_46838';
export function Component46838({ value = 46838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46838, 'data-value': derived.doubled }, children);
}
export default Component46838;
