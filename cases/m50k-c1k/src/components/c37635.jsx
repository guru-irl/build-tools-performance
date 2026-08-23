import React from 'react';
const LABEL_37635 = 'component_37635';
export function Component37635({ value = 37635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37635, 'data-value': derived.doubled }, children);
}
export default Component37635;
