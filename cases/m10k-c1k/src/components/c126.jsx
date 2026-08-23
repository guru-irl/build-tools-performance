import React from 'react';
const LABEL_126 = 'component_126';
export function Component126({ value = 126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_126, 'data-value': derived.doubled }, children);
}
export default Component126;
