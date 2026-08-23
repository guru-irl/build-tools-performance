import React from 'react';
const LABEL_45058 = 'component_45058';
export function Component45058({ value = 45058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45058, 'data-value': derived.doubled }, children);
}
export default Component45058;
