import React from 'react';
const LABEL_18339 = 'component_18339';
export function Component18339({ value = 18339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18339, 'data-value': derived.doubled }, children);
}
export default Component18339;
