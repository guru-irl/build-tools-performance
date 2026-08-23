import React from 'react';
const LABEL_1225 = 'component_1225';
export function Component1225({ value = 1225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1225, 'data-value': derived.doubled }, children);
}
export default Component1225;
