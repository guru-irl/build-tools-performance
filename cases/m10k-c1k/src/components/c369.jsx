import React from 'react';
const LABEL_369 = 'component_369';
export function Component369({ value = 369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_369, 'data-value': derived.doubled }, children);
}
export default Component369;
