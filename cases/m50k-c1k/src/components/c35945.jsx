import React from 'react';
const LABEL_35945 = 'component_35945';
export function Component35945({ value = 35945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35945, 'data-value': derived.doubled }, children);
}
export default Component35945;
