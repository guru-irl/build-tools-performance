import React from 'react';
const LABEL_28090 = 'component_28090';
export function Component28090({ value = 28090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28090, 'data-value': derived.doubled }, children);
}
export default Component28090;
