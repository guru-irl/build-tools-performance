import React from 'react';
const LABEL_10465 = 'component_10465';
export function Component10465({ value = 10465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10465, 'data-value': derived.doubled }, children);
}
export default Component10465;
