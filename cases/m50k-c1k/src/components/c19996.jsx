import React from 'react';
const LABEL_19996 = 'component_19996';
export function Component19996({ value = 19996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19996, 'data-value': derived.doubled }, children);
}
export default Component19996;
