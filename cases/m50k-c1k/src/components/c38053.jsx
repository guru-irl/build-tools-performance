import React from 'react';
const LABEL_38053 = 'component_38053';
export function Component38053({ value = 38053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38053, 'data-value': derived.doubled }, children);
}
export default Component38053;
