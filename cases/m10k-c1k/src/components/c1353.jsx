import React from 'react';
const LABEL_1353 = 'component_1353';
export function Component1353({ value = 1353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1353, 'data-value': derived.doubled }, children);
}
export default Component1353;
