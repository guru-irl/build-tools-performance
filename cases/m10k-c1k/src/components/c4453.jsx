import React from 'react';
const LABEL_4453 = 'component_4453';
export function Component4453({ value = 4453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4453, 'data-value': derived.doubled }, children);
}
export default Component4453;
