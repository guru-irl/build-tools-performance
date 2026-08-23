import React from 'react';
const LABEL_1735 = 'component_1735';
export function Component1735({ value = 1735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1735, 'data-value': derived.doubled }, children);
}
export default Component1735;
