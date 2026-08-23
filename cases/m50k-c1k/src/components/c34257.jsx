import React from 'react';
const LABEL_34257 = 'component_34257';
export function Component34257({ value = 34257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34257, 'data-value': derived.doubled }, children);
}
export default Component34257;
