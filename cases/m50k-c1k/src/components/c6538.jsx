import React from 'react';
const LABEL_6538 = 'component_6538';
export function Component6538({ value = 6538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6538, 'data-value': derived.doubled }, children);
}
export default Component6538;
