import React from 'react';
const LABEL_37174 = 'component_37174';
export function Component37174({ value = 37174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37174, 'data-value': derived.doubled }, children);
}
export default Component37174;
