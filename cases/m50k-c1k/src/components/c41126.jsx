import React from 'react';
const LABEL_41126 = 'component_41126';
export function Component41126({ value = 41126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41126, 'data-value': derived.doubled }, children);
}
export default Component41126;
