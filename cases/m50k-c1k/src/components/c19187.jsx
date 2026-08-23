import React from 'react';
const LABEL_19187 = 'component_19187';
export function Component19187({ value = 19187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19187, 'data-value': derived.doubled }, children);
}
export default Component19187;
