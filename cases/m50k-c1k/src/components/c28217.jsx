import React from 'react';
const LABEL_28217 = 'component_28217';
export function Component28217({ value = 28217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28217, 'data-value': derived.doubled }, children);
}
export default Component28217;
