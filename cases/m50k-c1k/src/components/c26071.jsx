import React from 'react';
const LABEL_26071 = 'component_26071';
export function Component26071({ value = 26071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26071, 'data-value': derived.doubled }, children);
}
export default Component26071;
