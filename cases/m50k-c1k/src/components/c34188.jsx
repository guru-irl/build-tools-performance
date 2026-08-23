import React from 'react';
const LABEL_34188 = 'component_34188';
export function Component34188({ value = 34188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34188, 'data-value': derived.doubled }, children);
}
export default Component34188;
