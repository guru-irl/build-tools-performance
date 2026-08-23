import React from 'react';
const LABEL_35143 = 'component_35143';
export function Component35143({ value = 35143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35143, 'data-value': derived.doubled }, children);
}
export default Component35143;
