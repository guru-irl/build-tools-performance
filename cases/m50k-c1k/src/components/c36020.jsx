import React from 'react';
const LABEL_36020 = 'component_36020';
export function Component36020({ value = 36020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36020, 'data-value': derived.doubled }, children);
}
export default Component36020;
