import React from 'react';
const LABEL_12141 = 'component_12141';
export function Component12141({ value = 12141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12141, 'data-value': derived.doubled }, children);
}
export default Component12141;
