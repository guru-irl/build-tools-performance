import React from 'react';
const LABEL_14175 = 'component_14175';
export function Component14175({ value = 14175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14175, 'data-value': derived.doubled }, children);
}
export default Component14175;
