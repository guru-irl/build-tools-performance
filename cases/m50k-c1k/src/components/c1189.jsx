import React from 'react';
const LABEL_1189 = 'component_1189';
export function Component1189({ value = 1189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1189, 'data-value': derived.doubled }, children);
}
export default Component1189;
