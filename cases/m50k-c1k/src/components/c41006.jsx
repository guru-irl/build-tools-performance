import React from 'react';
const LABEL_41006 = 'component_41006';
export function Component41006({ value = 41006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41006, 'data-value': derived.doubled }, children);
}
export default Component41006;
