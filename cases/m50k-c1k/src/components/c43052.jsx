import React from 'react';
const LABEL_43052 = 'component_43052';
export function Component43052({ value = 43052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43052, 'data-value': derived.doubled }, children);
}
export default Component43052;
