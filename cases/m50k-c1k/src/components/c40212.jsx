import React from 'react';
const LABEL_40212 = 'component_40212';
export function Component40212({ value = 40212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40212, 'data-value': derived.doubled }, children);
}
export default Component40212;
