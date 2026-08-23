import React from 'react';
const LABEL_43487 = 'component_43487';
export function Component43487({ value = 43487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43487, 'data-value': derived.doubled }, children);
}
export default Component43487;
