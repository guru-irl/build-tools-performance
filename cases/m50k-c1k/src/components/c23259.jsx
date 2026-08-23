import React from 'react';
const LABEL_23259 = 'component_23259';
export function Component23259({ value = 23259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23259, 'data-value': derived.doubled }, children);
}
export default Component23259;
