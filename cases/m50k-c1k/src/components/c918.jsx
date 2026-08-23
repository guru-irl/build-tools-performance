import React from 'react';
const LABEL_918 = 'component_918';
export function Component918({ value = 918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_918, 'data-value': derived.doubled }, children);
}
export default Component918;
