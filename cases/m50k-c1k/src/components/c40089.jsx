import React from 'react';
const LABEL_40089 = 'component_40089';
export function Component40089({ value = 40089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40089, 'data-value': derived.doubled }, children);
}
export default Component40089;
