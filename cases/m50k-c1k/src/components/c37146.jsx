import React from 'react';
const LABEL_37146 = 'component_37146';
export function Component37146({ value = 37146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37146, 'data-value': derived.doubled }, children);
}
export default Component37146;
