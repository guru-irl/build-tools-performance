import React from 'react';
const LABEL_825 = 'component_825';
export function Component825({ value = 825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_825, 'data-value': derived.doubled }, children);
}
export default Component825;
