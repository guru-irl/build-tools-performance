import React from 'react';
const LABEL_25087 = 'component_25087';
export function Component25087({ value = 25087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25087, 'data-value': derived.doubled }, children);
}
export default Component25087;
