import React from 'react';
const LABEL_37753 = 'component_37753';
export function Component37753({ value = 37753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37753, 'data-value': derived.doubled }, children);
}
export default Component37753;
