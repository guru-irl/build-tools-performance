import React from 'react';
const LABEL_6698 = 'component_6698';
export function Component6698({ value = 6698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6698, 'data-value': derived.doubled }, children);
}
export default Component6698;
