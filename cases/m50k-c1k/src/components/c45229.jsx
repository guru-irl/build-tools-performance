import React from 'react';
const LABEL_45229 = 'component_45229';
export function Component45229({ value = 45229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45229, 'data-value': derived.doubled }, children);
}
export default Component45229;
