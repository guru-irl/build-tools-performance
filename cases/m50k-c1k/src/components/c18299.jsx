import React from 'react';
const LABEL_18299 = 'component_18299';
export function Component18299({ value = 18299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18299, 'data-value': derived.doubled }, children);
}
export default Component18299;
