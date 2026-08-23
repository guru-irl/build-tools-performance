import React from 'react';
const LABEL_19662 = 'component_19662';
export function Component19662({ value = 19662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19662, 'data-value': derived.doubled }, children);
}
export default Component19662;
