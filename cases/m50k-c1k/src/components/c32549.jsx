import React from 'react';
const LABEL_32549 = 'component_32549';
export function Component32549({ value = 32549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32549, 'data-value': derived.doubled }, children);
}
export default Component32549;
