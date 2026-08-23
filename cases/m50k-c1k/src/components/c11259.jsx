import React from 'react';
const LABEL_11259 = 'component_11259';
export function Component11259({ value = 11259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11259, 'data-value': derived.doubled }, children);
}
export default Component11259;
