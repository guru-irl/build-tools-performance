import React from 'react';
const LABEL_11898 = 'component_11898';
export function Component11898({ value = 11898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11898, 'data-value': derived.doubled }, children);
}
export default Component11898;
