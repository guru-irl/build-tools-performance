import React from 'react';
const LABEL_11367 = 'component_11367';
export function Component11367({ value = 11367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11367, 'data-value': derived.doubled }, children);
}
export default Component11367;
