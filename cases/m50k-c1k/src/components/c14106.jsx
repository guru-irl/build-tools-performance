import React from 'react';
const LABEL_14106 = 'component_14106';
export function Component14106({ value = 14106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14106, 'data-value': derived.doubled }, children);
}
export default Component14106;
