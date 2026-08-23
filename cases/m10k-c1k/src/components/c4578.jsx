import React from 'react';
const LABEL_4578 = 'component_4578';
export function Component4578({ value = 4578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4578, 'data-value': derived.doubled }, children);
}
export default Component4578;
