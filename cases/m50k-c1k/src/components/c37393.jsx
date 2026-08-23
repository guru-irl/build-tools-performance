import React from 'react';
const LABEL_37393 = 'component_37393';
export function Component37393({ value = 37393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37393, 'data-value': derived.doubled }, children);
}
export default Component37393;
