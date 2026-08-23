import React from 'react';
const LABEL_45123 = 'component_45123';
export function Component45123({ value = 45123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45123, 'data-value': derived.doubled }, children);
}
export default Component45123;
