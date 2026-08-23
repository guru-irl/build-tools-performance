import React from 'react';
const LABEL_14126 = 'component_14126';
export function Component14126({ value = 14126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14126, 'data-value': derived.doubled }, children);
}
export default Component14126;
