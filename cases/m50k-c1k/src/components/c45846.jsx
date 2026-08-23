import React from 'react';
const LABEL_45846 = 'component_45846';
export function Component45846({ value = 45846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45846, 'data-value': derived.doubled }, children);
}
export default Component45846;
