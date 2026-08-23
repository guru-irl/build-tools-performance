import React from 'react';
const LABEL_36568 = 'component_36568';
export function Component36568({ value = 36568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36568, 'data-value': derived.doubled }, children);
}
export default Component36568;
