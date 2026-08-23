import React from 'react';
const LABEL_16668 = 'component_16668';
export function Component16668({ value = 16668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16668, 'data-value': derived.doubled }, children);
}
export default Component16668;
