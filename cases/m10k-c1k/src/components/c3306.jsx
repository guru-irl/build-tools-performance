import React from 'react';
const LABEL_3306 = 'component_3306';
export function Component3306({ value = 3306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3306, 'data-value': derived.doubled }, children);
}
export default Component3306;
