import React from 'react';
const LABEL_32939 = 'component_32939';
export function Component32939({ value = 32939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32939, 'data-value': derived.doubled }, children);
}
export default Component32939;
