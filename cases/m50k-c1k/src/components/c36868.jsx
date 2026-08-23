import React from 'react';
const LABEL_36868 = 'component_36868';
export function Component36868({ value = 36868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36868, 'data-value': derived.doubled }, children);
}
export default Component36868;
