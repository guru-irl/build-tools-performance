import React from 'react';
const LABEL_46299 = 'component_46299';
export function Component46299({ value = 46299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46299, 'data-value': derived.doubled }, children);
}
export default Component46299;
