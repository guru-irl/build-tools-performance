import React from 'react';
const LABEL_3406 = 'component_3406';
export function Component3406({ value = 3406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3406, 'data-value': derived.doubled }, children);
}
export default Component3406;
