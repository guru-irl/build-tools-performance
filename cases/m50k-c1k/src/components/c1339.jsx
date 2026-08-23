import React from 'react';
const LABEL_1339 = 'component_1339';
export function Component1339({ value = 1339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1339, 'data-value': derived.doubled }, children);
}
export default Component1339;
