import React from 'react';
const LABEL_31735 = 'component_31735';
export function Component31735({ value = 31735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31735, 'data-value': derived.doubled }, children);
}
export default Component31735;
