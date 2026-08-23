import React from 'react';
const LABEL_37406 = 'component_37406';
export function Component37406({ value = 37406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37406, 'data-value': derived.doubled }, children);
}
export default Component37406;
