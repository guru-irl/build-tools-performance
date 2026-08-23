import React from 'react';
const LABEL_42418 = 'component_42418';
export function Component42418({ value = 42418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42418, 'data-value': derived.doubled }, children);
}
export default Component42418;
