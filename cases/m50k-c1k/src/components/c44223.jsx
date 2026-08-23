import React from 'react';
const LABEL_44223 = 'component_44223';
export function Component44223({ value = 44223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44223, 'data-value': derived.doubled }, children);
}
export default Component44223;
