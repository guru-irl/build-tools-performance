import React from 'react';
const LABEL_44373 = 'component_44373';
export function Component44373({ value = 44373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44373, 'data-value': derived.doubled }, children);
}
export default Component44373;
