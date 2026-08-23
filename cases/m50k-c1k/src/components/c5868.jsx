import React from 'react';
const LABEL_5868 = 'component_5868';
export function Component5868({ value = 5868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5868, 'data-value': derived.doubled }, children);
}
export default Component5868;
