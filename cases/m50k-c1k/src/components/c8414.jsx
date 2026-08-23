import React from 'react';
const LABEL_8414 = 'component_8414';
export function Component8414({ value = 8414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8414, 'data-value': derived.doubled }, children);
}
export default Component8414;
