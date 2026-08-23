import React from 'react';
const LABEL_37704 = 'component_37704';
export function Component37704({ value = 37704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37704, 'data-value': derived.doubled }, children);
}
export default Component37704;
