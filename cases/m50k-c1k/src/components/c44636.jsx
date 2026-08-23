import React from 'react';
const LABEL_44636 = 'component_44636';
export function Component44636({ value = 44636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44636, 'data-value': derived.doubled }, children);
}
export default Component44636;
