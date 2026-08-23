import React from 'react';
const LABEL_28015 = 'component_28015';
export function Component28015({ value = 28015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28015, 'data-value': derived.doubled }, children);
}
export default Component28015;
