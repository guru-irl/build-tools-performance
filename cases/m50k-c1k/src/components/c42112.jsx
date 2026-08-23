import React from 'react';
const LABEL_42112 = 'component_42112';
export function Component42112({ value = 42112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42112, 'data-value': derived.doubled }, children);
}
export default Component42112;
