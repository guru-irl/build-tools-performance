import React from 'react';
const LABEL_11745 = 'component_11745';
export function Component11745({ value = 11745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11745, 'data-value': derived.doubled }, children);
}
export default Component11745;
