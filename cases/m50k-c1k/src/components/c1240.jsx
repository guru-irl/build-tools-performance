import React from 'react';
const LABEL_1240 = 'component_1240';
export function Component1240({ value = 1240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1240, 'data-value': derived.doubled }, children);
}
export default Component1240;
