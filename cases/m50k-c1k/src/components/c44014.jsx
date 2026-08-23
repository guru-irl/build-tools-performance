import React from 'react';
const LABEL_44014 = 'component_44014';
export function Component44014({ value = 44014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44014, 'data-value': derived.doubled }, children);
}
export default Component44014;
