import React from 'react';
const LABEL_45219 = 'component_45219';
export function Component45219({ value = 45219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45219, 'data-value': derived.doubled }, children);
}
export default Component45219;
