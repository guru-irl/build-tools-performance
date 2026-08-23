import React from 'react';
const LABEL_12203 = 'component_12203';
export function Component12203({ value = 12203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12203, 'data-value': derived.doubled }, children);
}
export default Component12203;
