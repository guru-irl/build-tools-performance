import React from 'react';
const LABEL_3875 = 'component_3875';
export function Component3875({ value = 3875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3875, 'data-value': derived.doubled }, children);
}
export default Component3875;
