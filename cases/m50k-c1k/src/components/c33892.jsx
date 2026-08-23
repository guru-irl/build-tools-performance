import React from 'react';
const LABEL_33892 = 'component_33892';
export function Component33892({ value = 33892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33892, 'data-value': derived.doubled }, children);
}
export default Component33892;
