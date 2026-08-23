import React from 'react';
const LABEL_22806 = 'component_22806';
export function Component22806({ value = 22806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22806, 'data-value': derived.doubled }, children);
}
export default Component22806;
