import React from 'react';
const LABEL_7090 = 'component_7090';
export function Component7090({ value = 7090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7090, 'data-value': derived.doubled }, children);
}
export default Component7090;
