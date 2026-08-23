import React from 'react';
const LABEL_1998 = 'component_1998';
export function Component1998({ value = 1998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1998, 'data-value': derived.doubled }, children);
}
export default Component1998;
