import React from 'react';
const LABEL_45698 = 'component_45698';
export function Component45698({ value = 45698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45698, 'data-value': derived.doubled }, children);
}
export default Component45698;
