import React from 'react';
const LABEL_14405 = 'component_14405';
export function Component14405({ value = 14405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14405, 'data-value': derived.doubled }, children);
}
export default Component14405;
