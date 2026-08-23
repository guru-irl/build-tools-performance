import React from 'react';
const LABEL_6747 = 'component_6747';
export function Component6747({ value = 6747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6747, 'data-value': derived.doubled }, children);
}
export default Component6747;
