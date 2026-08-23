import React from 'react';
const LABEL_41102 = 'component_41102';
export function Component41102({ value = 41102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41102, 'data-value': derived.doubled }, children);
}
export default Component41102;
