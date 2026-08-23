import React from 'react';
const LABEL_45704 = 'component_45704';
export function Component45704({ value = 45704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45704, 'data-value': derived.doubled }, children);
}
export default Component45704;
