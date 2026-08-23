import React from 'react';
const LABEL_31138 = 'component_31138';
export function Component31138({ value = 31138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31138, 'data-value': derived.doubled }, children);
}
export default Component31138;
