import React from 'react';
const LABEL_44198 = 'component_44198';
export function Component44198({ value = 44198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44198, 'data-value': derived.doubled }, children);
}
export default Component44198;
