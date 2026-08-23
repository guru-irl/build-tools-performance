import React from 'react';
const LABEL_14702 = 'component_14702';
export function Component14702({ value = 14702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14702, 'data-value': derived.doubled }, children);
}
export default Component14702;
