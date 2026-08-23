import React from 'react';
const LABEL_7775 = 'component_7775';
export function Component7775({ value = 7775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7775, 'data-value': derived.doubled }, children);
}
export default Component7775;
