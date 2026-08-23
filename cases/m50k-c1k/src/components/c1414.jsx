import React from 'react';
const LABEL_1414 = 'component_1414';
export function Component1414({ value = 1414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1414, 'data-value': derived.doubled }, children);
}
export default Component1414;
