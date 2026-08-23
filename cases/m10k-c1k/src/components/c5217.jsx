import React from 'react';
const LABEL_5217 = 'component_5217';
export function Component5217({ value = 5217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5217, 'data-value': derived.doubled }, children);
}
export default Component5217;
