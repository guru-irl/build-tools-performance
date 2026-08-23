import React from 'react';
const LABEL_37534 = 'component_37534';
export function Component37534({ value = 37534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37534, 'data-value': derived.doubled }, children);
}
export default Component37534;
