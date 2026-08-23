import React from 'react';
const LABEL_41830 = 'component_41830';
export function Component41830({ value = 41830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41830, 'data-value': derived.doubled }, children);
}
export default Component41830;
