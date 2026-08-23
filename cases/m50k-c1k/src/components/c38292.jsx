import React from 'react';
const LABEL_38292 = 'component_38292';
export function Component38292({ value = 38292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38292, 'data-value': derived.doubled }, children);
}
export default Component38292;
