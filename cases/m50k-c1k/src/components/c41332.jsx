import React from 'react';
const LABEL_41332 = 'component_41332';
export function Component41332({ value = 41332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41332, 'data-value': derived.doubled }, children);
}
export default Component41332;
