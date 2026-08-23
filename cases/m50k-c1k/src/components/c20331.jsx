import React from 'react';
const LABEL_20331 = 'component_20331';
export function Component20331({ value = 20331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20331, 'data-value': derived.doubled }, children);
}
export default Component20331;
