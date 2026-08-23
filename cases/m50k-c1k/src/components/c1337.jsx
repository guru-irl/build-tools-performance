import React from 'react';
const LABEL_1337 = 'component_1337';
export function Component1337({ value = 1337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1337, 'data-value': derived.doubled }, children);
}
export default Component1337;
