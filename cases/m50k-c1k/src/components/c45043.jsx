import React from 'react';
const LABEL_45043 = 'component_45043';
export function Component45043({ value = 45043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45043, 'data-value': derived.doubled }, children);
}
export default Component45043;
