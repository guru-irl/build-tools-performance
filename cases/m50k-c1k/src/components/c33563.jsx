import React from 'react';
const LABEL_33563 = 'component_33563';
export function Component33563({ value = 33563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33563, 'data-value': derived.doubled }, children);
}
export default Component33563;
