import React from 'react';
const LABEL_31896 = 'component_31896';
export function Component31896({ value = 31896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31896, 'data-value': derived.doubled }, children);
}
export default Component31896;
