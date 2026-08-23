import React from 'react';
const LABEL_4704 = 'component_4704';
export function Component4704({ value = 4704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4704, 'data-value': derived.doubled }, children);
}
export default Component4704;
