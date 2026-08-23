import React from 'react';
const LABEL_41213 = 'component_41213';
export function Component41213({ value = 41213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41213, 'data-value': derived.doubled }, children);
}
export default Component41213;
