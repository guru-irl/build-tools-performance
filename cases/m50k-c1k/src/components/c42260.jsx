import React from 'react';
const LABEL_42260 = 'component_42260';
export function Component42260({ value = 42260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42260, 'data-value': derived.doubled }, children);
}
export default Component42260;
