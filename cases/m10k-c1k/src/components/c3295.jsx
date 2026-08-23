import React from 'react';
const LABEL_3295 = 'component_3295';
export function Component3295({ value = 3295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3295, 'data-value': derived.doubled }, children);
}
export default Component3295;
