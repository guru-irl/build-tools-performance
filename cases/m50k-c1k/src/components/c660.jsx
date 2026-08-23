import React from 'react';
const LABEL_660 = 'component_660';
export function Component660({ value = 660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_660, 'data-value': derived.doubled }, children);
}
export default Component660;
