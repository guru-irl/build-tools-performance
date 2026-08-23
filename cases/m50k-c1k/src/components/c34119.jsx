import React from 'react';
const LABEL_34119 = 'component_34119';
export function Component34119({ value = 34119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34119, 'data-value': derived.doubled }, children);
}
export default Component34119;
