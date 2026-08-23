import React from 'react';
const LABEL_1143 = 'component_1143';
export function Component1143({ value = 1143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1143, 'data-value': derived.doubled }, children);
}
export default Component1143;
