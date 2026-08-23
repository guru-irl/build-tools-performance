import React from 'react';
const LABEL_45212 = 'component_45212';
export function Component45212({ value = 45212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45212, 'data-value': derived.doubled }, children);
}
export default Component45212;
