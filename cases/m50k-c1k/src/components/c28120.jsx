import React from 'react';
const LABEL_28120 = 'component_28120';
export function Component28120({ value = 28120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28120, 'data-value': derived.doubled }, children);
}
export default Component28120;
