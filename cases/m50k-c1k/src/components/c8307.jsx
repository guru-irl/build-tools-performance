import React from 'react';
const LABEL_8307 = 'component_8307';
export function Component8307({ value = 8307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8307, 'data-value': derived.doubled }, children);
}
export default Component8307;
