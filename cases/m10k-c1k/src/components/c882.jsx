import React from 'react';
const LABEL_882 = 'component_882';
export function Component882({ value = 882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_882, 'data-value': derived.doubled }, children);
}
export default Component882;
