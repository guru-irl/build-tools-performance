import React from 'react';
const LABEL_42147 = 'component_42147';
export function Component42147({ value = 42147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42147, 'data-value': derived.doubled }, children);
}
export default Component42147;
