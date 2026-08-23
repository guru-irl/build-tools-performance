import React from 'react';
const LABEL_36165 = 'component_36165';
export function Component36165({ value = 36165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36165, 'data-value': derived.doubled }, children);
}
export default Component36165;
