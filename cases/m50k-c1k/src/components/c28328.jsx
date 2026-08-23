import React from 'react';
const LABEL_28328 = 'component_28328';
export function Component28328({ value = 28328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28328, 'data-value': derived.doubled }, children);
}
export default Component28328;
