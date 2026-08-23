import React from 'react';
const LABEL_8141 = 'component_8141';
export function Component8141({ value = 8141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8141, 'data-value': derived.doubled }, children);
}
export default Component8141;
