import React from 'react';
const LABEL_37141 = 'component_37141';
export function Component37141({ value = 37141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37141, 'data-value': derived.doubled }, children);
}
export default Component37141;
