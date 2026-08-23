import React from 'react';
const LABEL_4265 = 'component_4265';
export function Component4265({ value = 4265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4265, 'data-value': derived.doubled }, children);
}
export default Component4265;
