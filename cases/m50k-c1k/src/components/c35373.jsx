import React from 'react';
const LABEL_35373 = 'component_35373';
export function Component35373({ value = 35373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35373, 'data-value': derived.doubled }, children);
}
export default Component35373;
