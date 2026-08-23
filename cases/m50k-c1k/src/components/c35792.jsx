import React from 'react';
const LABEL_35792 = 'component_35792';
export function Component35792({ value = 35792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35792, 'data-value': derived.doubled }, children);
}
export default Component35792;
