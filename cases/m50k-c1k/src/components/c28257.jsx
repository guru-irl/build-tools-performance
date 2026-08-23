import React from 'react';
const LABEL_28257 = 'component_28257';
export function Component28257({ value = 28257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28257, 'data-value': derived.doubled }, children);
}
export default Component28257;
