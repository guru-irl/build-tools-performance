import React from 'react';
const LABEL_38141 = 'component_38141';
export function Component38141({ value = 38141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38141, 'data-value': derived.doubled }, children);
}
export default Component38141;
