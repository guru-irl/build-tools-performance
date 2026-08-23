import React from 'react';
const LABEL_34259 = 'component_34259';
export function Component34259({ value = 34259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34259, 'data-value': derived.doubled }, children);
}
export default Component34259;
