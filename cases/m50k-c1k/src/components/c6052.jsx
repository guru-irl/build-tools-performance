import React from 'react';
const LABEL_6052 = 'component_6052';
export function Component6052({ value = 6052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6052, 'data-value': derived.doubled }, children);
}
export default Component6052;
