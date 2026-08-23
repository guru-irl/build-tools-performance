import React from 'react';
const LABEL_8498 = 'component_8498';
export function Component8498({ value = 8498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8498, 'data-value': derived.doubled }, children);
}
export default Component8498;
