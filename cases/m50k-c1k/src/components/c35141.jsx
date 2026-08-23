import React from 'react';
const LABEL_35141 = 'component_35141';
export function Component35141({ value = 35141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35141, 'data-value': derived.doubled }, children);
}
export default Component35141;
