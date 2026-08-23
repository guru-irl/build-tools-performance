import React from 'react';
const LABEL_44993 = 'component_44993';
export function Component44993({ value = 44993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44993, 'data-value': derived.doubled }, children);
}
export default Component44993;
