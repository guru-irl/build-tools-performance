import React from 'react';
const LABEL_42146 = 'component_42146';
export function Component42146({ value = 42146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42146, 'data-value': derived.doubled }, children);
}
export default Component42146;
