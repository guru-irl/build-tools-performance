import React from 'react';
const LABEL_45900 = 'component_45900';
export function Component45900({ value = 45900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45900, 'data-value': derived.doubled }, children);
}
export default Component45900;
