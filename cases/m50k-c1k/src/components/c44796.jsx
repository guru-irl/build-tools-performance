import React from 'react';
const LABEL_44796 = 'component_44796';
export function Component44796({ value = 44796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44796, 'data-value': derived.doubled }, children);
}
export default Component44796;
