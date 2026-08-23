import React from 'react';
const LABEL_10183 = 'component_10183';
export function Component10183({ value = 10183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10183, 'data-value': derived.doubled }, children);
}
export default Component10183;
