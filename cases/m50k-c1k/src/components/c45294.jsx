import React from 'react';
const LABEL_45294 = 'component_45294';
export function Component45294({ value = 45294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45294, 'data-value': derived.doubled }, children);
}
export default Component45294;
