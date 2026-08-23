import React from 'react';
const LABEL_37046 = 'component_37046';
export function Component37046({ value = 37046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37046, 'data-value': derived.doubled }, children);
}
export default Component37046;
