import React from 'react';
const LABEL_45825 = 'component_45825';
export function Component45825({ value = 45825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45825, 'data-value': derived.doubled }, children);
}
export default Component45825;
