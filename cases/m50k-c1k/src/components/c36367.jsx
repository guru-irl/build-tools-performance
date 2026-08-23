import React from 'react';
const LABEL_36367 = 'component_36367';
export function Component36367({ value = 36367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36367, 'data-value': derived.doubled }, children);
}
export default Component36367;
