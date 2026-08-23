import React from 'react';
const LABEL_36470 = 'component_36470';
export function Component36470({ value = 36470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36470, 'data-value': derived.doubled }, children);
}
export default Component36470;
