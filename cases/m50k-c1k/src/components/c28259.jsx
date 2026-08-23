import React from 'react';
const LABEL_28259 = 'component_28259';
export function Component28259({ value = 28259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28259, 'data-value': derived.doubled }, children);
}
export default Component28259;
