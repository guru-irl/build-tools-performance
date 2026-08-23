import React from 'react';
const LABEL_20914 = 'component_20914';
export function Component20914({ value = 20914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20914, 'data-value': derived.doubled }, children);
}
export default Component20914;
