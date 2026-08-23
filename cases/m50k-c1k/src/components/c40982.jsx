import React from 'react';
const LABEL_40982 = 'component_40982';
export function Component40982({ value = 40982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40982, 'data-value': derived.doubled }, children);
}
export default Component40982;
