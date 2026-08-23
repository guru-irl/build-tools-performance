import React from 'react';
const LABEL_4090 = 'component_4090';
export function Component4090({ value = 4090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4090, 'data-value': derived.doubled }, children);
}
export default Component4090;
