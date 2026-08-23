import React from 'react';
const LABEL_4308 = 'component_4308';
export function Component4308({ value = 4308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4308, 'data-value': derived.doubled }, children);
}
export default Component4308;
