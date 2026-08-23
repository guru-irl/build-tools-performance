import React from 'react';
const LABEL_2561 = 'component_2561';
export function Component2561({ value = 2561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2561, 'data-value': derived.doubled }, children);
}
export default Component2561;
