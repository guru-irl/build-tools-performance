import React from 'react';
const LABEL_45074 = 'component_45074';
export function Component45074({ value = 45074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45074, 'data-value': derived.doubled }, children);
}
export default Component45074;
