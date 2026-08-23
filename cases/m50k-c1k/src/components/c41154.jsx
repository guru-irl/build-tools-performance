import React from 'react';
const LABEL_41154 = 'component_41154';
export function Component41154({ value = 41154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41154, 'data-value': derived.doubled }, children);
}
export default Component41154;
