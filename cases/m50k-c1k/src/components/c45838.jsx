import React from 'react';
const LABEL_45838 = 'component_45838';
export function Component45838({ value = 45838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45838, 'data-value': derived.doubled }, children);
}
export default Component45838;
