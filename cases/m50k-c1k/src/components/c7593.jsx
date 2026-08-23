import React from 'react';
const LABEL_7593 = 'component_7593';
export function Component7593({ value = 7593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7593, 'data-value': derived.doubled }, children);
}
export default Component7593;
