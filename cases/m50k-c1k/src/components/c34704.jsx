import React from 'react';
const LABEL_34704 = 'component_34704';
export function Component34704({ value = 34704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34704, 'data-value': derived.doubled }, children);
}
export default Component34704;
