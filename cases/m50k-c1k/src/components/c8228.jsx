import React from 'react';
const LABEL_8228 = 'component_8228';
export function Component8228({ value = 8228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8228, 'data-value': derived.doubled }, children);
}
export default Component8228;
