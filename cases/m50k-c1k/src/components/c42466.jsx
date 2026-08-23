import React from 'react';
const LABEL_42466 = 'component_42466';
export function Component42466({ value = 42466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42466, 'data-value': derived.doubled }, children);
}
export default Component42466;
