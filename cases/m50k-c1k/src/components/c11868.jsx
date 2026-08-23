import React from 'react';
const LABEL_11868 = 'component_11868';
export function Component11868({ value = 11868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11868, 'data-value': derived.doubled }, children);
}
export default Component11868;
