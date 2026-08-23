import React from 'react';
const LABEL_4039 = 'component_4039';
export function Component4039({ value = 4039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4039, 'data-value': derived.doubled }, children);
}
export default Component4039;
