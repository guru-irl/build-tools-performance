import React from 'react';
const LABEL_1079 = 'component_1079';
export function Component1079({ value = 1079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1079, 'data-value': derived.doubled }, children);
}
export default Component1079;
