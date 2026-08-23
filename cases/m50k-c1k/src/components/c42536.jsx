import React from 'react';
const LABEL_42536 = 'component_42536';
export function Component42536({ value = 42536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42536, 'data-value': derived.doubled }, children);
}
export default Component42536;
