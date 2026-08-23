import React from 'react';
const LABEL_22401 = 'component_22401';
export function Component22401({ value = 22401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22401, 'data-value': derived.doubled }, children);
}
export default Component22401;
