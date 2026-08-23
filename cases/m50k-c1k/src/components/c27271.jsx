import React from 'react';
const LABEL_27271 = 'component_27271';
export function Component27271({ value = 27271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27271, 'data-value': derived.doubled }, children);
}
export default Component27271;
