import React from 'react';
const LABEL_30583 = 'component_30583';
export function Component30583({ value = 30583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30583, 'data-value': derived.doubled }, children);
}
export default Component30583;
