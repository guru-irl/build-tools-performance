import React from 'react';
const LABEL_42570 = 'component_42570';
export function Component42570({ value = 42570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42570, 'data-value': derived.doubled }, children);
}
export default Component42570;
