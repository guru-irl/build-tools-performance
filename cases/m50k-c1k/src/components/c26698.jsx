import React from 'react';
const LABEL_26698 = 'component_26698';
export function Component26698({ value = 26698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26698, 'data-value': derived.doubled }, children);
}
export default Component26698;
