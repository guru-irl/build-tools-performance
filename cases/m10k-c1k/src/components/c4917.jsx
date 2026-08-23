import React from 'react';
const LABEL_4917 = 'component_4917';
export function Component4917({ value = 4917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4917, 'data-value': derived.doubled }, children);
}
export default Component4917;
