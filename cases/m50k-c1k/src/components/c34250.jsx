import React from 'react';
const LABEL_34250 = 'component_34250';
export function Component34250({ value = 34250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34250, 'data-value': derived.doubled }, children);
}
export default Component34250;
