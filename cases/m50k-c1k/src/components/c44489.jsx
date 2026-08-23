import React from 'react';
const LABEL_44489 = 'component_44489';
export function Component44489({ value = 44489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44489, 'data-value': derived.doubled }, children);
}
export default Component44489;
