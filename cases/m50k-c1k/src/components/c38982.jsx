import React from 'react';
const LABEL_38982 = 'component_38982';
export function Component38982({ value = 38982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38982, 'data-value': derived.doubled }, children);
}
export default Component38982;
