import React from 'react';
const LABEL_44699 = 'component_44699';
export function Component44699({ value = 44699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44699, 'data-value': derived.doubled }, children);
}
export default Component44699;
