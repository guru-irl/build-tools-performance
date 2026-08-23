import React from 'react';
const LABEL_4331 = 'component_4331';
export function Component4331({ value = 4331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4331, 'data-value': derived.doubled }, children);
}
export default Component4331;
