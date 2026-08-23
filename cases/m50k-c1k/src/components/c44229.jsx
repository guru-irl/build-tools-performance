import React from 'react';
const LABEL_44229 = 'component_44229';
export function Component44229({ value = 44229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44229, 'data-value': derived.doubled }, children);
}
export default Component44229;
