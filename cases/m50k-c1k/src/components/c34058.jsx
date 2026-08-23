import React from 'react';
const LABEL_34058 = 'component_34058';
export function Component34058({ value = 34058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34058, 'data-value': derived.doubled }, children);
}
export default Component34058;
