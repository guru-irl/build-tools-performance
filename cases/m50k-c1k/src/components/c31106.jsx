import React from 'react';
const LABEL_31106 = 'component_31106';
export function Component31106({ value = 31106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31106, 'data-value': derived.doubled }, children);
}
export default Component31106;
