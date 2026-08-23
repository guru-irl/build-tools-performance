import React from 'react';
const LABEL_8239 = 'component_8239';
export function Component8239({ value = 8239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8239, 'data-value': derived.doubled }, children);
}
export default Component8239;
