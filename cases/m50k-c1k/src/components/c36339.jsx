import React from 'react';
const LABEL_36339 = 'component_36339';
export function Component36339({ value = 36339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36339, 'data-value': derived.doubled }, children);
}
export default Component36339;
