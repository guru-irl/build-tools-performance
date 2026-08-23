import React from 'react';
const LABEL_1196 = 'component_1196';
export function Component1196({ value = 1196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1196, 'data-value': derived.doubled }, children);
}
export default Component1196;
