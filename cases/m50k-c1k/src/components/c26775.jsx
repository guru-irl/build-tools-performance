import React from 'react';
const LABEL_26775 = 'component_26775';
export function Component26775({ value = 26775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26775, 'data-value': derived.doubled }, children);
}
export default Component26775;
