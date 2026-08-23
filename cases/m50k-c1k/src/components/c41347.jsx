import React from 'react';
const LABEL_41347 = 'component_41347';
export function Component41347({ value = 41347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41347, 'data-value': derived.doubled }, children);
}
export default Component41347;
