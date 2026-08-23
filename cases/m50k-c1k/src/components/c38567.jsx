import React from 'react';
const LABEL_38567 = 'component_38567';
export function Component38567({ value = 38567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38567, 'data-value': derived.doubled }, children);
}
export default Component38567;
