import React from 'react';
const LABEL_3221 = 'component_3221';
export function Component3221({ value = 3221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3221, 'data-value': derived.doubled }, children);
}
export default Component3221;
