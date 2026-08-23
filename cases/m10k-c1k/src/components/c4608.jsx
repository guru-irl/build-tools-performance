import React from 'react';
const LABEL_4608 = 'component_4608';
export function Component4608({ value = 4608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4608, 'data-value': derived.doubled }, children);
}
export default Component4608;
