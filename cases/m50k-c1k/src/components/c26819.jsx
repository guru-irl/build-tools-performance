import React from 'react';
const LABEL_26819 = 'component_26819';
export function Component26819({ value = 26819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26819, 'data-value': derived.doubled }, children);
}
export default Component26819;
