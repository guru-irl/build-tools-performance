import React from 'react';
const LABEL_34579 = 'component_34579';
export function Component34579({ value = 34579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34579, 'data-value': derived.doubled }, children);
}
export default Component34579;
