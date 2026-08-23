import React from 'react';
const LABEL_1447 = 'component_1447';
export function Component1447({ value = 1447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1447, 'data-value': derived.doubled }, children);
}
export default Component1447;
