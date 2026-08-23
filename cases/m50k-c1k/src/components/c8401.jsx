import React from 'react';
const LABEL_8401 = 'component_8401';
export function Component8401({ value = 8401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8401, 'data-value': derived.doubled }, children);
}
export default Component8401;
