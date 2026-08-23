import React from 'react';
const LABEL_41702 = 'component_41702';
export function Component41702({ value = 41702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41702, 'data-value': derived.doubled }, children);
}
export default Component41702;
