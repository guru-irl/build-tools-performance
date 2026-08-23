import React from 'react';
const LABEL_28542 = 'component_28542';
export function Component28542({ value = 28542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28542, 'data-value': derived.doubled }, children);
}
export default Component28542;
