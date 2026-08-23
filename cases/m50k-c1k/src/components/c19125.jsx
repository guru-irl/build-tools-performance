import React from 'react';
const LABEL_19125 = 'component_19125';
export function Component19125({ value = 19125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19125, 'data-value': derived.doubled }, children);
}
export default Component19125;
