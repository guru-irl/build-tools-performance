import React from 'react';
const LABEL_7480 = 'component_7480';
export function Component7480({ value = 7480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7480, 'data-value': derived.doubled }, children);
}
export default Component7480;
