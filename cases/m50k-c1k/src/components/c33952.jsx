import React from 'react';
const LABEL_33952 = 'component_33952';
export function Component33952({ value = 33952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33952, 'data-value': derived.doubled }, children);
}
export default Component33952;
