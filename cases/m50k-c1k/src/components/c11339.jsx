import React from 'react';
const LABEL_11339 = 'component_11339';
export function Component11339({ value = 11339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11339, 'data-value': derived.doubled }, children);
}
export default Component11339;
