import React from 'react';
const LABEL_45650 = 'component_45650';
export function Component45650({ value = 45650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45650, 'data-value': derived.doubled }, children);
}
export default Component45650;
