import React from 'react';
const LABEL_45518 = 'component_45518';
export function Component45518({ value = 45518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45518, 'data-value': derived.doubled }, children);
}
export default Component45518;
