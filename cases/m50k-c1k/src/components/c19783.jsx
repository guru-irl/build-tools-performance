import React from 'react';
const LABEL_19783 = 'component_19783';
export function Component19783({ value = 19783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19783, 'data-value': derived.doubled }, children);
}
export default Component19783;
