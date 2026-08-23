import React from 'react';
const LABEL_31772 = 'component_31772';
export function Component31772({ value = 31772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31772, 'data-value': derived.doubled }, children);
}
export default Component31772;
