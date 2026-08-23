import React from 'react';
const LABEL_4182 = 'component_4182';
export function Component4182({ value = 4182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4182, 'data-value': derived.doubled }, children);
}
export default Component4182;
