import React from 'react';
const LABEL_13259 = 'component_13259';
export function Component13259({ value = 13259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13259, 'data-value': derived.doubled }, children);
}
export default Component13259;
