import React from 'react';
const LABEL_46228 = 'component_46228';
export function Component46228({ value = 46228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46228, 'data-value': derived.doubled }, children);
}
export default Component46228;
