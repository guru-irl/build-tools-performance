import React from 'react';
const LABEL_41188 = 'component_41188';
export function Component41188({ value = 41188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41188, 'data-value': derived.doubled }, children);
}
export default Component41188;
