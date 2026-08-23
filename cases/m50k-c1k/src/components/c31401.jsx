import React from 'react';
const LABEL_31401 = 'component_31401';
export function Component31401({ value = 31401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31401, 'data-value': derived.doubled }, children);
}
export default Component31401;
