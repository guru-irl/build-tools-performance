import React from 'react';
const LABEL_20311 = 'component_20311';
export function Component20311({ value = 20311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20311, 'data-value': derived.doubled }, children);
}
export default Component20311;
