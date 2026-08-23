import React from 'react';
const LABEL_35788 = 'component_35788';
export function Component35788({ value = 35788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35788, 'data-value': derived.doubled }, children);
}
export default Component35788;
