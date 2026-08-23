import React from 'react';
const LABEL_45696 = 'component_45696';
export function Component45696({ value = 45696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45696, 'data-value': derived.doubled }, children);
}
export default Component45696;
