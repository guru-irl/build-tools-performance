import React from 'react';
const LABEL_41698 = 'component_41698';
export function Component41698({ value = 41698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41698, 'data-value': derived.doubled }, children);
}
export default Component41698;
