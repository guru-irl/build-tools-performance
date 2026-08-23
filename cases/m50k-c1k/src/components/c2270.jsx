import React from 'react';
const LABEL_2270 = 'component_2270';
export function Component2270({ value = 2270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2270, 'data-value': derived.doubled }, children);
}
export default Component2270;
