import React from 'react';
const LABEL_269 = 'component_269';
export function Component269({ value = 269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_269, 'data-value': derived.doubled }, children);
}
export default Component269;
