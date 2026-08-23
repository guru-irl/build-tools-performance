import React from 'react';
const LABEL_28463 = 'component_28463';
export function Component28463({ value = 28463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28463, 'data-value': derived.doubled }, children);
}
export default Component28463;
