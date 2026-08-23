import React from 'react';
const LABEL_31136 = 'component_31136';
export function Component31136({ value = 31136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31136, 'data-value': derived.doubled }, children);
}
export default Component31136;
