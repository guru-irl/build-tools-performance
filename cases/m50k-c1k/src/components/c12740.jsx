import React from 'react';
const LABEL_12740 = 'component_12740';
export function Component12740({ value = 12740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12740, 'data-value': derived.doubled }, children);
}
export default Component12740;
