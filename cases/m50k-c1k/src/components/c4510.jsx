import React from 'react';
const LABEL_4510 = 'component_4510';
export function Component4510({ value = 4510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4510, 'data-value': derived.doubled }, children);
}
export default Component4510;
