import React from 'react';
const LABEL_42994 = 'component_42994';
export function Component42994({ value = 42994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42994, 'data-value': derived.doubled }, children);
}
export default Component42994;
