import React from 'react';
const LABEL_41121 = 'component_41121';
export function Component41121({ value = 41121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41121, 'data-value': derived.doubled }, children);
}
export default Component41121;
