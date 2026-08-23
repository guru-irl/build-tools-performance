import React from 'react';
const LABEL_44515 = 'component_44515';
export function Component44515({ value = 44515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44515, 'data-value': derived.doubled }, children);
}
export default Component44515;
