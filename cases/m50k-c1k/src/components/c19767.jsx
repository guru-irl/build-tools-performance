import React from 'react';
const LABEL_19767 = 'component_19767';
export function Component19767({ value = 19767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19767, 'data-value': derived.doubled }, children);
}
export default Component19767;
