import React from 'react';
const LABEL_30698 = 'component_30698';
export function Component30698({ value = 30698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30698, 'data-value': derived.doubled }, children);
}
export default Component30698;
