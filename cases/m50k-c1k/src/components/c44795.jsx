import React from 'react';
const LABEL_44795 = 'component_44795';
export function Component44795({ value = 44795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44795, 'data-value': derived.doubled }, children);
}
export default Component44795;
