import React from 'react';
const LABEL_45835 = 'component_45835';
export function Component45835({ value = 45835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45835, 'data-value': derived.doubled }, children);
}
export default Component45835;
