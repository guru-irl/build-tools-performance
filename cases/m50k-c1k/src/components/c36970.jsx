import React from 'react';
const LABEL_36970 = 'component_36970';
export function Component36970({ value = 36970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36970, 'data-value': derived.doubled }, children);
}
export default Component36970;
