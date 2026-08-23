import React from 'react';
const LABEL_7506 = 'component_7506';
export function Component7506({ value = 7506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7506, 'data-value': derived.doubled }, children);
}
export default Component7506;
