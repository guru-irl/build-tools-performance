import React from 'react';
const LABEL_1042 = 'component_1042';
export function Component1042({ value = 1042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1042, 'data-value': derived.doubled }, children);
}
export default Component1042;
