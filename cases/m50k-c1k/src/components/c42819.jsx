import React from 'react';
const LABEL_42819 = 'component_42819';
export function Component42819({ value = 42819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42819, 'data-value': derived.doubled }, children);
}
export default Component42819;
