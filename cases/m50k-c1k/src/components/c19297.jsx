import React from 'react';
const LABEL_19297 = 'component_19297';
export function Component19297({ value = 19297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19297, 'data-value': derived.doubled }, children);
}
export default Component19297;
