import React from 'react';
const LABEL_24868 = 'component_24868';
export function Component24868({ value = 24868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24868, 'data-value': derived.doubled }, children);
}
export default Component24868;
