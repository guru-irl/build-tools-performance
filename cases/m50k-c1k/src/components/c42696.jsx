import React from 'react';
const LABEL_42696 = 'component_42696';
export function Component42696({ value = 42696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42696, 'data-value': derived.doubled }, children);
}
export default Component42696;
