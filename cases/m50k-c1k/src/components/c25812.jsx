import React from 'react';
const LABEL_25812 = 'component_25812';
export function Component25812({ value = 25812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25812, 'data-value': derived.doubled }, children);
}
export default Component25812;
