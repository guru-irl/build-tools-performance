import React from 'react';
const LABEL_24852 = 'component_24852';
export function Component24852({ value = 24852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24852, 'data-value': derived.doubled }, children);
}
export default Component24852;
