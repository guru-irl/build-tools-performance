import React from 'react';
const LABEL_30881 = 'component_30881';
export function Component30881({ value = 30881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30881, 'data-value': derived.doubled }, children);
}
export default Component30881;
