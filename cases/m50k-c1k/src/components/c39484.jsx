import React from 'react';
const LABEL_39484 = 'component_39484';
export function Component39484({ value = 39484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39484, 'data-value': derived.doubled }, children);
}
export default Component39484;
