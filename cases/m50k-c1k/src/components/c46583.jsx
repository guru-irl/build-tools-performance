import React from 'react';
const LABEL_46583 = 'component_46583';
export function Component46583({ value = 46583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46583, 'data-value': derived.doubled }, children);
}
export default Component46583;
