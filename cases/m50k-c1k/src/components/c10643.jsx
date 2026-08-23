import React from 'react';
const LABEL_10643 = 'component_10643';
export function Component10643({ value = 10643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10643, 'data-value': derived.doubled }, children);
}
export default Component10643;
