import React from 'react';
const LABEL_18996 = 'component_18996';
export function Component18996({ value = 18996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18996, 'data-value': derived.doubled }, children);
}
export default Component18996;
