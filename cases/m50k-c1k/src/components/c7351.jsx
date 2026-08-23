import React from 'react';
const LABEL_7351 = 'component_7351';
export function Component7351({ value = 7351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7351, 'data-value': derived.doubled }, children);
}
export default Component7351;
