import React from 'react';
const LABEL_38992 = 'component_38992';
export function Component38992({ value = 38992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38992, 'data-value': derived.doubled }, children);
}
export default Component38992;
