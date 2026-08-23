import React from 'react';
const LABEL_28447 = 'component_28447';
export function Component28447({ value = 28447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28447, 'data-value': derived.doubled }, children);
}
export default Component28447;
