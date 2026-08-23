import React from 'react';
const LABEL_25720 = 'component_25720';
export function Component25720({ value = 25720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25720, 'data-value': derived.doubled }, children);
}
export default Component25720;
