import React from 'react';
const LABEL_7339 = 'component_7339';
export function Component7339({ value = 7339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7339, 'data-value': derived.doubled }, children);
}
export default Component7339;
