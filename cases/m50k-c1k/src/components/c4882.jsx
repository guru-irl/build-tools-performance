import React from 'react';
const LABEL_4882 = 'component_4882';
export function Component4882({ value = 4882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4882, 'data-value': derived.doubled }, children);
}
export default Component4882;
