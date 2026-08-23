import React from 'react';
const LABEL_26868 = 'component_26868';
export function Component26868({ value = 26868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26868, 'data-value': derived.doubled }, children);
}
export default Component26868;
