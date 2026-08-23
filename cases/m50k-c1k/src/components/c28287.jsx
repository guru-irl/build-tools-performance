import React from 'react';
const LABEL_28287 = 'component_28287';
export function Component28287({ value = 28287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28287, 'data-value': derived.doubled }, children);
}
export default Component28287;
