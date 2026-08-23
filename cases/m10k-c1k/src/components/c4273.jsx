import React from 'react';
const LABEL_4273 = 'component_4273';
export function Component4273({ value = 4273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4273, 'data-value': derived.doubled }, children);
}
export default Component4273;
