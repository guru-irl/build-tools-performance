import React from 'react';
const LABEL_18120 = 'component_18120';
export function Component18120({ value = 18120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18120, 'data-value': derived.doubled }, children);
}
export default Component18120;
