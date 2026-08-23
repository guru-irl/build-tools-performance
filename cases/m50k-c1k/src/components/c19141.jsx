import React from 'react';
const LABEL_19141 = 'component_19141';
export function Component19141({ value = 19141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19141, 'data-value': derived.doubled }, children);
}
export default Component19141;
