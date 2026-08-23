import React from 'react';
const LABEL_4098 = 'component_4098';
export function Component4098({ value = 4098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4098, 'data-value': derived.doubled }, children);
}
export default Component4098;
