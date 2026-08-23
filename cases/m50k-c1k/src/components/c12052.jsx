import React from 'react';
const LABEL_12052 = 'component_12052';
export function Component12052({ value = 12052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12052, 'data-value': derived.doubled }, children);
}
export default Component12052;
