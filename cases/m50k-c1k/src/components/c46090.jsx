import React from 'react';
const LABEL_46090 = 'component_46090';
export function Component46090({ value = 46090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46090, 'data-value': derived.doubled }, children);
}
export default Component46090;
