import React from 'react';
const LABEL_37157 = 'component_37157';
export function Component37157({ value = 37157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37157, 'data-value': derived.doubled }, children);
}
export default Component37157;
