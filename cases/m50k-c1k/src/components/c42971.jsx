import React from 'react';
const LABEL_42971 = 'component_42971';
export function Component42971({ value = 42971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42971, 'data-value': derived.doubled }, children);
}
export default Component42971;
