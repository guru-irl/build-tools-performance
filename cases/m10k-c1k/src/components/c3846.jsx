import React from 'react';
const LABEL_3846 = 'component_3846';
export function Component3846({ value = 3846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3846, 'data-value': derived.doubled }, children);
}
export default Component3846;
