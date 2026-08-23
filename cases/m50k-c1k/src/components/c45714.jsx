import React from 'react';
const LABEL_45714 = 'component_45714';
export function Component45714({ value = 45714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45714, 'data-value': derived.doubled }, children);
}
export default Component45714;
