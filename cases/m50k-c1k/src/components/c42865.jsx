import React from 'react';
const LABEL_42865 = 'component_42865';
export function Component42865({ value = 42865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42865, 'data-value': derived.doubled }, children);
}
export default Component42865;
