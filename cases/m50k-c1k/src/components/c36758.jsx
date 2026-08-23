import React from 'react';
const LABEL_36758 = 'component_36758';
export function Component36758({ value = 36758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36758, 'data-value': derived.doubled }, children);
}
export default Component36758;
