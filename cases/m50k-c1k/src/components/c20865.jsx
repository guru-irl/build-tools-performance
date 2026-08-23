import React from 'react';
const LABEL_20865 = 'component_20865';
export function Component20865({ value = 20865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20865, 'data-value': derived.doubled }, children);
}
export default Component20865;
