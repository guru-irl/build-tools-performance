import React from 'react';
const LABEL_259 = 'component_259';
export function Component259({ value = 259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_259, 'data-value': derived.doubled }, children);
}
export default Component259;
