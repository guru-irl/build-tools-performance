import React from 'react';
const LABEL_39020 = 'component_39020';
export function Component39020({ value = 39020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39020, 'data-value': derived.doubled }, children);
}
export default Component39020;
