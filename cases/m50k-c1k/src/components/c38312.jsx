import React from 'react';
const LABEL_38312 = 'component_38312';
export function Component38312({ value = 38312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38312, 'data-value': derived.doubled }, children);
}
export default Component38312;
