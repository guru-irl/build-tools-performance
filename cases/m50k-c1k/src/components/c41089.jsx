import React from 'react';
const LABEL_41089 = 'component_41089';
export function Component41089({ value = 41089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41089, 'data-value': derived.doubled }, children);
}
export default Component41089;
