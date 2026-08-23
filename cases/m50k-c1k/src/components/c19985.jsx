import React from 'react';
const LABEL_19985 = 'component_19985';
export function Component19985({ value = 19985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19985, 'data-value': derived.doubled }, children);
}
export default Component19985;
