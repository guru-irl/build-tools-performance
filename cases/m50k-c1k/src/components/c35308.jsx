import React from 'react';
const LABEL_35308 = 'component_35308';
export function Component35308({ value = 35308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35308, 'data-value': derived.doubled }, children);
}
export default Component35308;
