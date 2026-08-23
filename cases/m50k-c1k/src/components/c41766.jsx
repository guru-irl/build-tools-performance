import React from 'react';
const LABEL_41766 = 'component_41766';
export function Component41766({ value = 41766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41766, 'data-value': derived.doubled }, children);
}
export default Component41766;
