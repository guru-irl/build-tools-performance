import React from 'react';
const LABEL_44547 = 'component_44547';
export function Component44547({ value = 44547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44547, 'data-value': derived.doubled }, children);
}
export default Component44547;
