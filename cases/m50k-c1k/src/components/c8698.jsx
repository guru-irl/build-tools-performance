import React from 'react';
const LABEL_8698 = 'component_8698';
export function Component8698({ value = 8698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8698, 'data-value': derived.doubled }, children);
}
export default Component8698;
