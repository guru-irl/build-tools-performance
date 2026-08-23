import React from 'react';
const LABEL_20339 = 'component_20339';
export function Component20339({ value = 20339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20339, 'data-value': derived.doubled }, children);
}
export default Component20339;
