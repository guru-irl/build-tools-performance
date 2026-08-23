import React from 'react';
const LABEL_44205 = 'component_44205';
export function Component44205({ value = 44205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44205, 'data-value': derived.doubled }, children);
}
export default Component44205;
