import React from 'react';
const LABEL_4783 = 'component_4783';
export function Component4783({ value = 4783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4783, 'data-value': derived.doubled }, children);
}
export default Component4783;
