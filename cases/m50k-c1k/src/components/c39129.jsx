import React from 'react';
const LABEL_39129 = 'component_39129';
export function Component39129({ value = 39129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39129, 'data-value': derived.doubled }, children);
}
export default Component39129;
