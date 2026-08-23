import React from 'react';
const LABEL_37658 = 'component_37658';
export function Component37658({ value = 37658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37658, 'data-value': derived.doubled }, children);
}
export default Component37658;
