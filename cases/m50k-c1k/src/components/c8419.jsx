import React from 'react';
const LABEL_8419 = 'component_8419';
export function Component8419({ value = 8419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8419, 'data-value': derived.doubled }, children);
}
export default Component8419;
