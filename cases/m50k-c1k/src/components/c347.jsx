import React from 'react';
const LABEL_347 = 'component_347';
export function Component347({ value = 347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_347, 'data-value': derived.doubled }, children);
}
export default Component347;
