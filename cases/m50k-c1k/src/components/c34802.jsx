import React from 'react';
const LABEL_34802 = 'component_34802';
export function Component34802({ value = 34802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34802, 'data-value': derived.doubled }, children);
}
export default Component34802;
