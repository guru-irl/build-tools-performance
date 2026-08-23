import React from 'react';
const LABEL_22688 = 'component_22688';
export function Component22688({ value = 22688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22688, 'data-value': derived.doubled }, children);
}
export default Component22688;
