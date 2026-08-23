import React from 'react';
const LABEL_25690 = 'component_25690';
export function Component25690({ value = 25690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25690, 'data-value': derived.doubled }, children);
}
export default Component25690;
