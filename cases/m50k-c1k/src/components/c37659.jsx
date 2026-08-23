import React from 'react';
const LABEL_37659 = 'component_37659';
export function Component37659({ value = 37659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37659, 'data-value': derived.doubled }, children);
}
export default Component37659;
