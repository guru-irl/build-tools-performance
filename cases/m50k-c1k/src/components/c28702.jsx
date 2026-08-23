import React from 'react';
const LABEL_28702 = 'component_28702';
export function Component28702({ value = 28702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28702, 'data-value': derived.doubled }, children);
}
export default Component28702;
