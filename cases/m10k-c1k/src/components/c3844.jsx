import React from 'react';
const LABEL_3844 = 'component_3844';
export function Component3844({ value = 3844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3844, 'data-value': derived.doubled }, children);
}
export default Component3844;
