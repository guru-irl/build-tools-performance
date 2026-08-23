import React from 'react';
const LABEL_45217 = 'component_45217';
export function Component45217({ value = 45217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45217, 'data-value': derived.doubled }, children);
}
export default Component45217;
