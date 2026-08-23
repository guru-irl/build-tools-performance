import React from 'react';
const LABEL_11783 = 'component_11783';
export function Component11783({ value = 11783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11783, 'data-value': derived.doubled }, children);
}
export default Component11783;
