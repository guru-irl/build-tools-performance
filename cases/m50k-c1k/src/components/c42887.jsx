import React from 'react';
const LABEL_42887 = 'component_42887';
export function Component42887({ value = 42887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42887, 'data-value': derived.doubled }, children);
}
export default Component42887;
