import React from 'react';
const LABEL_37726 = 'component_37726';
export function Component37726({ value = 37726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37726, 'data-value': derived.doubled }, children);
}
export default Component37726;
