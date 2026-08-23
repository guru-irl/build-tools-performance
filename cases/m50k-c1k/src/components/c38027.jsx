import React from 'react';
const LABEL_38027 = 'component_38027';
export function Component38027({ value = 38027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38027, 'data-value': derived.doubled }, children);
}
export default Component38027;
