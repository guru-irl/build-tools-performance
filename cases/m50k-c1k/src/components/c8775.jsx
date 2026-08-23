import React from 'react';
const LABEL_8775 = 'component_8775';
export function Component8775({ value = 8775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8775, 'data-value': derived.doubled }, children);
}
export default Component8775;
