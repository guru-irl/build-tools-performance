import React from 'react';
const LABEL_40299 = 'component_40299';
export function Component40299({ value = 40299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40299, 'data-value': derived.doubled }, children);
}
export default Component40299;
