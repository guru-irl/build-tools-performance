import React from 'react';
const LABEL_37339 = 'component_37339';
export function Component37339({ value = 37339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37339, 'data-value': derived.doubled }, children);
}
export default Component37339;
