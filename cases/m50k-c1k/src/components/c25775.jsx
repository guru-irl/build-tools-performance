import React from 'react';
const LABEL_25775 = 'component_25775';
export function Component25775({ value = 25775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25775, 'data-value': derived.doubled }, children);
}
export default Component25775;
