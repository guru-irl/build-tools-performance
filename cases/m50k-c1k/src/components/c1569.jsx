import React from 'react';
const LABEL_1569 = 'component_1569';
export function Component1569({ value = 1569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1569, 'data-value': derived.doubled }, children);
}
export default Component1569;
