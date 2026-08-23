import React from 'react';
const LABEL_45741 = 'component_45741';
export function Component45741({ value = 45741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45741, 'data-value': derived.doubled }, children);
}
export default Component45741;
