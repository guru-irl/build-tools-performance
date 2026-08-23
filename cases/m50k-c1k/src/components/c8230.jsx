import React from 'react';
const LABEL_8230 = 'component_8230';
export function Component8230({ value = 8230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8230, 'data-value': derived.doubled }, children);
}
export default Component8230;
