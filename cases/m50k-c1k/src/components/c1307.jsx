import React from 'react';
const LABEL_1307 = 'component_1307';
export function Component1307({ value = 1307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1307, 'data-value': derived.doubled }, children);
}
export default Component1307;
