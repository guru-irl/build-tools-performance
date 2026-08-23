import React from 'react';
const LABEL_19383 = 'component_19383';
export function Component19383({ value = 19383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19383, 'data-value': derived.doubled }, children);
}
export default Component19383;
