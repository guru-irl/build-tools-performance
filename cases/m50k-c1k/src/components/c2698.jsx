import React from 'react';
const LABEL_2698 = 'component_2698';
export function Component2698({ value = 2698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2698, 'data-value': derived.doubled }, children);
}
export default Component2698;
