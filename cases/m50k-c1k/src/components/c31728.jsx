import React from 'react';
const LABEL_31728 = 'component_31728';
export function Component31728({ value = 31728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31728, 'data-value': derived.doubled }, children);
}
export default Component31728;
