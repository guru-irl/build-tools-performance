import React from 'react';
const LABEL_34984 = 'component_34984';
export function Component34984({ value = 34984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34984, 'data-value': derived.doubled }, children);
}
export default Component34984;
