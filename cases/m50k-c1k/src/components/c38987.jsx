import React from 'react';
const LABEL_38987 = 'component_38987';
export function Component38987({ value = 38987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38987, 'data-value': derived.doubled }, children);
}
export default Component38987;
