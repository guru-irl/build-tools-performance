import React from 'react';
const LABEL_23224 = 'component_23224';
export function Component23224({ value = 23224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23224, 'data-value': derived.doubled }, children);
}
export default Component23224;
