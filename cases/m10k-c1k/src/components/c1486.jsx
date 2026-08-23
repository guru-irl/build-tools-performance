import React from 'react';
const LABEL_1486 = 'component_1486';
export function Component1486({ value = 1486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1486, 'data-value': derived.doubled }, children);
}
export default Component1486;
