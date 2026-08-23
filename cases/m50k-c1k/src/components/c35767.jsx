import React from 'react';
const LABEL_35767 = 'component_35767';
export function Component35767({ value = 35767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35767, 'data-value': derived.doubled }, children);
}
export default Component35767;
