import React from 'react';
const LABEL_14221 = 'component_14221';
export function Component14221({ value = 14221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14221, 'data-value': derived.doubled }, children);
}
export default Component14221;
