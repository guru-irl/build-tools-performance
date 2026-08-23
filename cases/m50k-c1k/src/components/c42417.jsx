import React from 'react';
const LABEL_42417 = 'component_42417';
export function Component42417({ value = 42417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42417, 'data-value': derived.doubled }, children);
}
export default Component42417;
