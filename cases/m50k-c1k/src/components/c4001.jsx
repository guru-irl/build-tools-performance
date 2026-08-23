import React from 'react';
const LABEL_4001 = 'component_4001';
export function Component4001({ value = 4001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4001, 'data-value': derived.doubled }, children);
}
export default Component4001;
