import React from 'react';
const LABEL_4878 = 'component_4878';
export function Component4878({ value = 4878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4878, 'data-value': derived.doubled }, children);
}
export default Component4878;
