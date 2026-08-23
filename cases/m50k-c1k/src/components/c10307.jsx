import React from 'react';
const LABEL_10307 = 'component_10307';
export function Component10307({ value = 10307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10307, 'data-value': derived.doubled }, children);
}
export default Component10307;
