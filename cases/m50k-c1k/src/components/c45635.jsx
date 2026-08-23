import React from 'react';
const LABEL_45635 = 'component_45635';
export function Component45635({ value = 45635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45635, 'data-value': derived.doubled }, children);
}
export default Component45635;
