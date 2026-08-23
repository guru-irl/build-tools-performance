import React from 'react';
const LABEL_18690 = 'component_18690';
export function Component18690({ value = 18690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18690, 'data-value': derived.doubled }, children);
}
export default Component18690;
