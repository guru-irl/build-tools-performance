import React from 'react';
const LABEL_34006 = 'component_34006';
export function Component34006({ value = 34006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34006, 'data-value': derived.doubled }, children);
}
export default Component34006;
