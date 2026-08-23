import React from 'react';
const LABEL_44669 = 'component_44669';
export function Component44669({ value = 44669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44669, 'data-value': derived.doubled }, children);
}
export default Component44669;
