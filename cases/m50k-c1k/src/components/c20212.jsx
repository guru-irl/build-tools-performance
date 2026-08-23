import React from 'react';
const LABEL_20212 = 'component_20212';
export function Component20212({ value = 20212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20212, 'data-value': derived.doubled }, children);
}
export default Component20212;
