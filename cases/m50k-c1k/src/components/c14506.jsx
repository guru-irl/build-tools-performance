import React from 'react';
const LABEL_14506 = 'component_14506';
export function Component14506({ value = 14506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14506, 'data-value': derived.doubled }, children);
}
export default Component14506;
