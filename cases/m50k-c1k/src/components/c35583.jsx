import React from 'react';
const LABEL_35583 = 'component_35583';
export function Component35583({ value = 35583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35583, 'data-value': derived.doubled }, children);
}
export default Component35583;
