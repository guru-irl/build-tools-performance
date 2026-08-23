import React from 'react';
const LABEL_31895 = 'component_31895';
export function Component31895({ value = 31895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31895, 'data-value': derived.doubled }, children);
}
export default Component31895;
