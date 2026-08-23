import React from 'react';
const LABEL_37089 = 'component_37089';
export function Component37089({ value = 37089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37089, 'data-value': derived.doubled }, children);
}
export default Component37089;
