import React from 'react';
const LABEL_7367 = 'component_7367';
export function Component7367({ value = 7367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7367, 'data-value': derived.doubled }, children);
}
export default Component7367;
