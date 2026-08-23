import React from 'react';
const LABEL_19816 = 'component_19816';
export function Component19816({ value = 19816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19816, 'data-value': derived.doubled }, children);
}
export default Component19816;
