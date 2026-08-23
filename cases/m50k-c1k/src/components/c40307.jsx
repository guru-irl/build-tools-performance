import React from 'react';
const LABEL_40307 = 'component_40307';
export function Component40307({ value = 40307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40307, 'data-value': derived.doubled }, children);
}
export default Component40307;
