import React from 'react';
const LABEL_19393 = 'component_19393';
export function Component19393({ value = 19393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19393, 'data-value': derived.doubled }, children);
}
export default Component19393;
