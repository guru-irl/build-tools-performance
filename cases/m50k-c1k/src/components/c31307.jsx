import React from 'react';
const LABEL_31307 = 'component_31307';
export function Component31307({ value = 31307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31307, 'data-value': derived.doubled }, children);
}
export default Component31307;
