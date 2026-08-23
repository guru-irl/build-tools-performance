import React from 'react';
const LABEL_46901 = 'component_46901';
export function Component46901({ value = 46901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46901, 'data-value': derived.doubled }, children);
}
export default Component46901;
