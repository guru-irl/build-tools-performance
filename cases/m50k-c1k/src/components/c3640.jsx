import React from 'react';
const LABEL_3640 = 'component_3640';
export function Component3640({ value = 3640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3640, 'data-value': derived.doubled }, children);
}
export default Component3640;
