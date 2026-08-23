import React from 'react';
const LABEL_1129 = 'component_1129';
export function Component1129({ value = 1129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1129, 'data-value': derived.doubled }, children);
}
export default Component1129;
