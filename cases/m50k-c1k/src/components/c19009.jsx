import React from 'react';
const LABEL_19009 = 'component_19009';
export function Component19009({ value = 19009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19009, 'data-value': derived.doubled }, children);
}
export default Component19009;
