import React from 'react';
const LABEL_45966 = 'component_45966';
export function Component45966({ value = 45966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45966, 'data-value': derived.doubled }, children);
}
export default Component45966;
