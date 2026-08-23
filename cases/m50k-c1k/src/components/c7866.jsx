import React from 'react';
const LABEL_7866 = 'component_7866';
export function Component7866({ value = 7866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7866, 'data-value': derived.doubled }, children);
}
export default Component7866;
