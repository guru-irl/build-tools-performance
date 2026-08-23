import React from 'react';
const LABEL_19089 = 'component_19089';
export function Component19089({ value = 19089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19089, 'data-value': derived.doubled }, children);
}
export default Component19089;
