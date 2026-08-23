import React from 'react';
const LABEL_8079 = 'component_8079';
export function Component8079({ value = 8079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8079, 'data-value': derived.doubled }, children);
}
export default Component8079;
