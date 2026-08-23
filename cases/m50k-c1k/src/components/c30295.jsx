import React from 'react';
const LABEL_30295 = 'component_30295';
export function Component30295({ value = 30295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30295, 'data-value': derived.doubled }, children);
}
export default Component30295;
