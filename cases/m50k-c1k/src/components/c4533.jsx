import React from 'react';
const LABEL_4533 = 'component_4533';
export function Component4533({ value = 4533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4533, 'data-value': derived.doubled }, children);
}
export default Component4533;
