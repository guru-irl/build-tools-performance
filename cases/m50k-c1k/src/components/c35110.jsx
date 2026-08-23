import React from 'react';
const LABEL_35110 = 'component_35110';
export function Component35110({ value = 35110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35110, 'data-value': derived.doubled }, children);
}
export default Component35110;
