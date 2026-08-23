import React from 'react';
const LABEL_19914 = 'component_19914';
export function Component19914({ value = 19914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19914, 'data-value': derived.doubled }, children);
}
export default Component19914;
