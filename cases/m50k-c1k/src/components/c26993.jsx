import React from 'react';
const LABEL_26993 = 'component_26993';
export function Component26993({ value = 26993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26993, 'data-value': derived.doubled }, children);
}
export default Component26993;
