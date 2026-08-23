import React from 'react';
const LABEL_19307 = 'component_19307';
export function Component19307({ value = 19307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19307, 'data-value': derived.doubled }, children);
}
export default Component19307;
