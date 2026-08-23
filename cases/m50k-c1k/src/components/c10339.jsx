import React from 'react';
const LABEL_10339 = 'component_10339';
export function Component10339({ value = 10339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10339, 'data-value': derived.doubled }, children);
}
export default Component10339;
