import React from 'react';
const LABEL_23698 = 'component_23698';
export function Component23698({ value = 23698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23698, 'data-value': derived.doubled }, children);
}
export default Component23698;
