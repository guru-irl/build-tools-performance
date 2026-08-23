import React from 'react';
const LABEL_11702 = 'component_11702';
export function Component11702({ value = 11702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11702, 'data-value': derived.doubled }, children);
}
export default Component11702;
