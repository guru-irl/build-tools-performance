import React from 'react';
const LABEL_45869 = 'component_45869';
export function Component45869({ value = 45869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45869, 'data-value': derived.doubled }, children);
}
export default Component45869;
