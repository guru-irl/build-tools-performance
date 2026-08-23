import React from 'react';
const LABEL_45134 = 'component_45134';
export function Component45134({ value = 45134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45134, 'data-value': derived.doubled }, children);
}
export default Component45134;
