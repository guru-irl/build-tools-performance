import React from 'react';
const LABEL_5840 = 'component_5840';
export function Component5840({ value = 5840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5840, 'data-value': derived.doubled }, children);
}
export default Component5840;
