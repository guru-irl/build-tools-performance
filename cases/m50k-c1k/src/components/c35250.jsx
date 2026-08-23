import React from 'react';
const LABEL_35250 = 'component_35250';
export function Component35250({ value = 35250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35250, 'data-value': derived.doubled }, children);
}
export default Component35250;
