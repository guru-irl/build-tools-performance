import React from 'react';
const LABEL_22669 = 'component_22669';
export function Component22669({ value = 22669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22669, 'data-value': derived.doubled }, children);
}
export default Component22669;
