import React from 'react';
const LABEL_38059 = 'component_38059';
export function Component38059({ value = 38059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38059, 'data-value': derived.doubled }, children);
}
export default Component38059;
