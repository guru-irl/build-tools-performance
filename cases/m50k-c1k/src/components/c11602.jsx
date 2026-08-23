import React from 'react';
const LABEL_11602 = 'component_11602';
export function Component11602({ value = 11602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11602, 'data-value': derived.doubled }, children);
}
export default Component11602;
