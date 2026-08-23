import React from 'react';
const LABEL_38115 = 'component_38115';
export function Component38115({ value = 38115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38115, 'data-value': derived.doubled }, children);
}
export default Component38115;
