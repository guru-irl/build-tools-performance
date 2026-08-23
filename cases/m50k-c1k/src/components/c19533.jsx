import React from 'react';
const LABEL_19533 = 'component_19533';
export function Component19533({ value = 19533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19533, 'data-value': derived.doubled }, children);
}
export default Component19533;
