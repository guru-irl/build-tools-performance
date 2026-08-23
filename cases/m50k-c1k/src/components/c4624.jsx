import React from 'react';
const LABEL_4624 = 'component_4624';
export function Component4624({ value = 4624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4624, 'data-value': derived.doubled }, children);
}
export default Component4624;
