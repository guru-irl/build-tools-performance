import React from 'react';
const LABEL_7347 = 'component_7347';
export function Component7347({ value = 7347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7347, 'data-value': derived.doubled }, children);
}
export default Component7347;
