import React from 'react';
const LABEL_25699 = 'component_25699';
export function Component25699({ value = 25699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25699, 'data-value': derived.doubled }, children);
}
export default Component25699;
