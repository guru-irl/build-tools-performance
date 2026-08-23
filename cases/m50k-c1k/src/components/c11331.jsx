import React from 'react';
const LABEL_11331 = 'component_11331';
export function Component11331({ value = 11331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11331, 'data-value': derived.doubled }, children);
}
export default Component11331;
