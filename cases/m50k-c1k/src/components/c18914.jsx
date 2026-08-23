import React from 'react';
const LABEL_18914 = 'component_18914';
export function Component18914({ value = 18914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18914, 'data-value': derived.doubled }, children);
}
export default Component18914;
