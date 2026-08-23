import React from 'react';
const LABEL_19842 = 'component_19842';
export function Component19842({ value = 19842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19842, 'data-value': derived.doubled }, children);
}
export default Component19842;
