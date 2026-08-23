import React from 'react';
const LABEL_41292 = 'component_41292';
export function Component41292({ value = 41292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41292, 'data-value': derived.doubled }, children);
}
export default Component41292;
