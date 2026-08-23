import React from 'react';
const LABEL_13305 = 'component_13305';
export function Component13305({ value = 13305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13305, 'data-value': derived.doubled }, children);
}
export default Component13305;
