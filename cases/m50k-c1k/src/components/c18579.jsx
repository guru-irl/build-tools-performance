import React from 'react';
const LABEL_18579 = 'component_18579';
export function Component18579({ value = 18579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18579, 'data-value': derived.doubled }, children);
}
export default Component18579;
