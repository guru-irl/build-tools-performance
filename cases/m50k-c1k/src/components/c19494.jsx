import React from 'react';
const LABEL_19494 = 'component_19494';
export function Component19494({ value = 19494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19494, 'data-value': derived.doubled }, children);
}
export default Component19494;
