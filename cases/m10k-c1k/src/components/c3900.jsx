import React from 'react';
const LABEL_3900 = 'component_3900';
export function Component3900({ value = 3900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3900, 'data-value': derived.doubled }, children);
}
export default Component3900;
