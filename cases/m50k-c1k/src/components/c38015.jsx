import React from 'react';
const LABEL_38015 = 'component_38015';
export function Component38015({ value = 38015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38015, 'data-value': derived.doubled }, children);
}
export default Component38015;
