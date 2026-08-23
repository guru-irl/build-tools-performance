import React from 'react';
const LABEL_44294 = 'component_44294';
export function Component44294({ value = 44294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44294, 'data-value': derived.doubled }, children);
}
export default Component44294;
