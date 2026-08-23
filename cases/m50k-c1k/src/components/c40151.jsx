import React from 'react';
const LABEL_40151 = 'component_40151';
export function Component40151({ value = 40151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40151, 'data-value': derived.doubled }, children);
}
export default Component40151;
