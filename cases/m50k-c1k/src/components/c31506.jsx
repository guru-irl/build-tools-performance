import React from 'react';
const LABEL_31506 = 'component_31506';
export function Component31506({ value = 31506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31506, 'data-value': derived.doubled }, children);
}
export default Component31506;
