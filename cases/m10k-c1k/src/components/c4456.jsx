import React from 'react';
const LABEL_4456 = 'component_4456';
export function Component4456({ value = 4456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4456, 'data-value': derived.doubled }, children);
}
export default Component4456;
