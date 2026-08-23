import React from 'react';
const LABEL_38070 = 'component_38070';
export function Component38070({ value = 38070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38070, 'data-value': derived.doubled }, children);
}
export default Component38070;
