import React from 'react';
const LABEL_41826 = 'component_41826';
export function Component41826({ value = 41826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41826, 'data-value': derived.doubled }, children);
}
export default Component41826;
