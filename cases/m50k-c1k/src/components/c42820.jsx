import React from 'react';
const LABEL_42820 = 'component_42820';
export function Component42820({ value = 42820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42820, 'data-value': derived.doubled }, children);
}
export default Component42820;
