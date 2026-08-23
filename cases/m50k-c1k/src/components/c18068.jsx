import React from 'react';
const LABEL_18068 = 'component_18068';
export function Component18068({ value = 18068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18068, 'data-value': derived.doubled }, children);
}
export default Component18068;
