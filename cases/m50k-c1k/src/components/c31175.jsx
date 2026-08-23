import React from 'react';
const LABEL_31175 = 'component_31175';
export function Component31175({ value = 31175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31175, 'data-value': derived.doubled }, children);
}
export default Component31175;
