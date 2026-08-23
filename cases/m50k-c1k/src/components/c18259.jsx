import React from 'react';
const LABEL_18259 = 'component_18259';
export function Component18259({ value = 18259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18259, 'data-value': derived.doubled }, children);
}
export default Component18259;
