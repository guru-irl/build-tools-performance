import React from 'react';
const LABEL_3472 = 'component_3472';
export function Component3472({ value = 3472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3472, 'data-value': derived.doubled }, children);
}
export default Component3472;
