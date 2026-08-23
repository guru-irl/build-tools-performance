import React from 'react';
const LABEL_38071 = 'component_38071';
export function Component38071({ value = 38071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38071, 'data-value': derived.doubled }, children);
}
export default Component38071;
