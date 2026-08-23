import React from 'react';
const LABEL_8106 = 'component_8106';
export function Component8106({ value = 8106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8106, 'data-value': derived.doubled }, children);
}
export default Component8106;
