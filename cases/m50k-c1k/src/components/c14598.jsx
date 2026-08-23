import React from 'react';
const LABEL_14598 = 'component_14598';
export function Component14598({ value = 14598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14598, 'data-value': derived.doubled }, children);
}
export default Component14598;
