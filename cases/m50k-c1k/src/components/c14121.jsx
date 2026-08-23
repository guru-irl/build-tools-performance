import React from 'react';
const LABEL_14121 = 'component_14121';
export function Component14121({ value = 14121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14121, 'data-value': derived.doubled }, children);
}
export default Component14121;
