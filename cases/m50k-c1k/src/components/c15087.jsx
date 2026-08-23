import React from 'react';
const LABEL_15087 = 'component_15087';
export function Component15087({ value = 15087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15087, 'data-value': derived.doubled }, children);
}
export default Component15087;
