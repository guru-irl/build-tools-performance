import React from 'react';
const LABEL_19014 = 'component_19014';
export function Component19014({ value = 19014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19014, 'data-value': derived.doubled }, children);
}
export default Component19014;
