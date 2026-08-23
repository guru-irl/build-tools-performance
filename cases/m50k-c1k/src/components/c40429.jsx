import React from 'react';
const LABEL_40429 = 'component_40429';
export function Component40429({ value = 40429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40429, 'data-value': derived.doubled }, children);
}
export default Component40429;
