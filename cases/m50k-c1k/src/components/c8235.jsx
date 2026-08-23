import React from 'react';
const LABEL_8235 = 'component_8235';
export function Component8235({ value = 8235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8235, 'data-value': derived.doubled }, children);
}
export default Component8235;
