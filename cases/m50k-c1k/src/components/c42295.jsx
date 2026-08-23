import React from 'react';
const LABEL_42295 = 'component_42295';
export function Component42295({ value = 42295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42295, 'data-value': derived.doubled }, children);
}
export default Component42295;
