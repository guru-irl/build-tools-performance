import React from 'react';
const LABEL_1184 = 'component_1184';
export function Component1184({ value = 1184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1184, 'data-value': derived.doubled }, children);
}
export default Component1184;
