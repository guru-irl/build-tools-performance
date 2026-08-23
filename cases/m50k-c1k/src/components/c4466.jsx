import React from 'react';
const LABEL_4466 = 'component_4466';
export function Component4466({ value = 4466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4466, 'data-value': derived.doubled }, children);
}
export default Component4466;
