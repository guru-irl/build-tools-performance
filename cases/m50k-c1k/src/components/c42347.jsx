import React from 'react';
const LABEL_42347 = 'component_42347';
export function Component42347({ value = 42347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42347, 'data-value': derived.doubled }, children);
}
export default Component42347;
