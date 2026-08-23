import React from 'react';
const LABEL_37867 = 'component_37867';
export function Component37867({ value = 37867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37867, 'data-value': derived.doubled }, children);
}
export default Component37867;
