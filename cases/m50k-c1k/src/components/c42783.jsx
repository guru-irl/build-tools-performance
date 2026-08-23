import React from 'react';
const LABEL_42783 = 'component_42783';
export function Component42783({ value = 42783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42783, 'data-value': derived.doubled }, children);
}
export default Component42783;
