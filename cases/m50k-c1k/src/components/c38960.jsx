import React from 'react';
const LABEL_38960 = 'component_38960';
export function Component38960({ value = 38960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38960, 'data-value': derived.doubled }, children);
}
export default Component38960;
