import React from 'react';
const LABEL_26690 = 'component_26690';
export function Component26690({ value = 26690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26690, 'data-value': derived.doubled }, children);
}
export default Component26690;
