import React from 'react';
const LABEL_38055 = 'component_38055';
export function Component38055({ value = 38055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38055, 'data-value': derived.doubled }, children);
}
export default Component38055;
