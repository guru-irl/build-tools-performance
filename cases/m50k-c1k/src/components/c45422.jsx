import React from 'react';
const LABEL_45422 = 'component_45422';
export function Component45422({ value = 45422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45422, 'data-value': derived.doubled }, children);
}
export default Component45422;
