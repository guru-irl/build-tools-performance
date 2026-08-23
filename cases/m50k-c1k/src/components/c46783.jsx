import React from 'react';
const LABEL_46783 = 'component_46783';
export function Component46783({ value = 46783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46783, 'data-value': derived.doubled }, children);
}
export default Component46783;
