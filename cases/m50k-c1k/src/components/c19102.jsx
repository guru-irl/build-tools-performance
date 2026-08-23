import React from 'react';
const LABEL_19102 = 'component_19102';
export function Component19102({ value = 19102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19102, 'data-value': derived.doubled }, children);
}
export default Component19102;
