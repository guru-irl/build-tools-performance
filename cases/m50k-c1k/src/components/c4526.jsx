import React from 'react';
const LABEL_4526 = 'component_4526';
export function Component4526({ value = 4526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4526, 'data-value': derived.doubled }, children);
}
export default Component4526;
