import React from 'react';
const LABEL_4260 = 'component_4260';
export function Component4260({ value = 4260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4260, 'data-value': derived.doubled }, children);
}
export default Component4260;
