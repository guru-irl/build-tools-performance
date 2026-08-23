import React from 'react';
const LABEL_7952 = 'component_7952';
export function Component7952({ value = 7952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7952, 'data-value': derived.doubled }, children);
}
export default Component7952;
