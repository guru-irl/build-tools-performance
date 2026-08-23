import React from 'react';
const LABEL_4307 = 'component_4307';
export function Component4307({ value = 4307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4307, 'data-value': derived.doubled }, children);
}
export default Component4307;
